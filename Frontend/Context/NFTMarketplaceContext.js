import React, { useState, useEffect, useContext } from "react"
import Web3Modal from "../../Smart_Contracts/node_modules/Web3Modal"
import { ethers } from "../../Smart_Contracts/node_modules/ethers"
import Router from "next/router"
import { useRouter } from "next/router"
import axios from "../../Smart_Contracts/node_modules/axios"
import { create } from "ipfs-http-client"

// INTERNAL IMPORTS
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants"

const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID
const PROJECTSECRETEKEY = process.env.NEXT_PUBLIC_PROJECTSECRETEKEY
const SUBDOMAIN = process.env.NEXT_PUBLIC_SUBDOMAIN

//To Upload Image to IPFS
const projectId = PROJECTID
const projectSecretKey = PROJECTSECRETEKEY
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecretKey).toString("base64")
const subdomain = SUBDOMAIN

const client = create({
  host: "ipfs.infura.io",
  //host: "ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
})

//--FETCH SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  )

//---CONNECTING WITH SMART CONTRACT
const connectToSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal() // library to making connection flows easy
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchContract(signer)
    return contract
  } catch (error) {
    console.log("Something went wrong while connecting with contract")
  }
}

export const NFTMarketplaceContext = React.createContext()

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collet, and sell NFTs"

  //--Use States
  const [error, setError] = useState("")
  const [openError, setOpenError] = useState(false)
  const [currentAccount, setCurrentAccount] = useState("")
  const router = useRouter()

  //--check if wallet is connected
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask!")

      const accounts = await window.ethereum.request({ method: "eth_accounts" }) // array of accounts provided by metamask
      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log("No account found")
      }

      console.log("Connected with: ", accounts[0])
    } catch (error) {
      console.log("Something went wrong while checking connecting to wallet")
    }
  }

  // useEffect(() => {
  //   checkIfWalletConnected()
  // }, [])

  //--click and connect wallet function
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask!")

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      }) // array of accounts provided by metamask

      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log("Something went wrong while connecting to wallet")
    }
  }

  //--Upload to IPFS function
  // 'file' is the file we want to upload in dropzone
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file })
      const url = `${subdomain}/ipfs/${added.path}`
      // const url = `https://ipfs.io/ipfs/${added.path}`
      return url
    } catch (error) {
      console.log("Something went wrong while uploading to IPFS")
    }
  }

  //--Create Sale function _COPIED VERSION
  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image)
      return setOpenError(true), setError(`Missing Data`)

    //Convert data into JSON format
    const data = JSON.stringify({ name, description, image })

    // ---Add data to IPFS
    try {
      const added = await client.add(data)
      const url = `${subdomain}/ipfs/${added.path}`
      //const url = `https://ipfs.io/ipfs/${added.path}`;
      console.log("Meta Data URL", url)
      await createSale(url, price)
    } catch (error) {
      console.log(`Error to upload IPFS${error}`)
      setError(`Error to upload IPFS`)
      setOpenError(true)
    }
  }

  // ------INTERNAL FUNCTION TO CREATE NFT SALE COPIED VERSION
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether")

      const contract = await connectToSmartContract()

      const listingPrice = await contract.getListingPrice()

      // --CREATE NFT
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          })

      await transaction.wait()
      router.push("/search")
    } catch (error) {
      console.log(`Create sale error ${error}`)
      setError(`Create sale error`)
      setOpenError(true)
    }
  }

  //--Fetch NFTs function
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider()
      //^^provider/signer address to connect to the smart contract
      const contract = fetchContract(provider)
      const data = await contract.fetchMarketItems()

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenUri = await contract.tokenURI(tokenId) // from ERC721

            const { image, name, description } = await axios.get(tokenUri) // axios.get(..) = fetch JSON data from its url
            const price = ethers.utils.formatUnits(unformattedPrice, "ether")

            // returns all data, including those former used to axios.get() the latter
            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenUri,
            }
          }
        )
      )
      return items // returns array of arrays
    } catch (error) {
      console.log("Something went wrong while fetching NFTs")
    }
  }

  //--Fetch My NFTs or Listed NFTs function
  const fetchMyNFTs = async (type) => {
    try {
      const contract = await connectToSmartContract()

      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFTs()

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenUri = await contract.tokenURI(tokenId) // from ERC721
            const {
              data: { image, name, description },
            } = await axios.get(tokenUri)
            const price = ethers.utils.formatUnits(unformattedPrice, "ether")

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenUri,
            }
          }
        )
      )
      return items
    } catch {
      console.log("Something went wrong while fetching listed NFTs")
    }
  }

  //--buy NFT function
  const buyNFT = async (nft) => {
    try {
      const contract = await connectToSmartContract()
      const price = ethers.utils.parseUnits(nft.price, "ether")
      const transaction = await contract.createSale(nft.tokenUri, price, {
        value: price,
      })
      await transaction.wait()
    } catch (error) {
      console.log("Something went wrong while buying NFT")
    }
  }

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTs,
        buyNFT,
        currentAccount,
        titleData,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  )
}
