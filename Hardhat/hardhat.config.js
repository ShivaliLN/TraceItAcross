require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
    networks: {
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/" || "",
      accounts:
      [PRIVATE_KEY],
    },
    calibrationnet: {
        chainId: 314159,
        url: "https://api.calibration.node.glif.io/rpc/v1",
        accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: {
      arbitrumStylus: 'abc',
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://sepolia-blockscout.scroll.io/api',
          browserURL: 'https://sepolia-blockscout.scroll.io/',
        },
      },
      {
        network: 'arbitrumStylus',
        chainId: 23011913,
        urls: {
          apiURL: 'https://stylus-testnet.arbitrum.io/rpc',
          browserURL: 'https://stylus-testnet-explorer.arbitrum.io/',
        },
      }
    ],
  },
};
