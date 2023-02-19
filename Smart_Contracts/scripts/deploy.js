const hre = require("hardhat");

async function main() {
    const MARKETPLACE = await hre.ethers.getContractFactory("NFTMarketplace");
    const marketplace = await MARKETPLACE.deploy();

    await marketplace.deployed();

    console.log(`Contract deployed to ${marketplace.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
