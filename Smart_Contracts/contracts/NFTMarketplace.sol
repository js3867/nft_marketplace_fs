// SPDX-License-Identifier: MIT
// Created following along Daulat Hussain's NFTMarketplace full stack project

pragma solidity ^0.8.4;

// INTERNAL IMPORT FROM OpZep
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint listingPrice = 0.0015 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint tokenId;
        address payable seller;
        address payable owner;
        uint price;
        bool sold;
    }

    event idMarketItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorised.");
        _;
    }

    // uses ERC721.sol import
    constructor() ERC721("NFT Metaverse Token", "MYNFT") {
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint _listingPrice) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    // view is preferable for viewing state variables (over 'pure')
    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    // CREATE NFT TOKEN FUNCTION

    function createToken(
        string memory tokenURI,
        uint price
    ) public payable returns (uint) {
        _tokenIds.increment();

        uint newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    // CREATING MARKET ITEM

    function createMarketItem(uint tokenId, uint price) private {
        require(price > 0, "Price must be greater than zero.");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price."
        );

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)), // buyer = this smart contract (for now)
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    // FUNCTION FOR RESALE TOKEN

    function resellToken(uint tokenId, uint price) public payable {
        require(
            idMarketItem[tokenId].owner == msg.sender,
            "Only owner can sell."
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to asking price."
        );

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    // FUNCTION CREATE MARKET SALE

    function createMarketSale(uint tokenId) public payable {
        uint price = idMarketItem[tokenId].price;

        require(msg.value == price, "Offer must equal asking price.");

        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenId); // transfers the NFT token

        payable(owner).transfer(listingPrice); // divvies up msg.value (<< listing price to marketplace)
        payable(idMarketItem[tokenId].seller).transfer(msg.value); // (<< rest to seller)

        // moved these reassignments down so that seller can be paid before updating the value
        // is it possible that the payment can be made to prev_seller and update to no_seller in the same block?
        // ...but then in that case how tf can platform get paid the listingPrice and rest be paid to seller?
        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].seller = payable(address(0)); // address(0) is basically `this.address` - so why bother with this line?
    }

    // GETTING UNSOLD NFT DATA

    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount); // (length)
        for (uint256 i = 0; i < itemCount; i++) {
            if (idMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items that a user has purchased */

    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has listed */

    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
