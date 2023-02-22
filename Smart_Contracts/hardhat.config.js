require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        polygon_mumbai: {
            url: process.env.ALCHEMY_MUMBAI_RPC_KEY,
            accounts: [
                `0x${process.env.ACC_PRIVATE_KEY1}`,
                `0x${process.env.ACC_PRIVATE_KEY2}`,
            ],
        },
    },
};
