<img src="Logo.png" alt="TraceItAcross Logo" width="200"/>

# TraceItAcross

## Overview

_TraceItAcross_ is an innovative platform designed to track products using blockchain technology. By utilizing NFTs (Non-Fungible Tokens), businesses can create unique digital representations of their products, allowing consumers to trace the authenticity and origins of the items they purchase. The platform offers a seamless interface for consumers to scan a QR code on the product, which retrieves and displays all relevant information about the product from the blockchain.

## Features

1. **Product Registration**: Businesses can register their products on the blockchain by creating NFTs.
2. **Product Verification**: Authorized entities can manually verify products using a dedicated interface within the application. Users upload verification documents against a specific Product ID, which are then saved on web3.storage. Upon successful document upload, the smart contract is updated to reflect the product's verification status on the blockchain, ensuring a trustworthy verification process.
3. **Product Lookup**: Consumers can easily look up product information by scanning a QR code on packaging.
4. **QR Code Scanner**: A built-in QR code scanner for easy product lookups.
5. **Blockchain-powered**: Utilizing Ethereum blockchain to store product information securely and transparently.
6. **Responsive UI**: A user-friendly interface for both businesses and consumers.

## Tech Stack

### Frontend:
- **React.js**: Powers the frontend, enabling a dynamic and interactive user interface.

### Blockchain:
- **Solidity**: Smart contract programming language used for creating the TraceItAcross contract on the Ethereum blockchain.
- **Scroll Sepolia**: The smart contract is deployed on the Scroll Sepolia testnet for lower transaction costs and efficient scalability.
- **FVM Filecoin Calibration**:Deploying on Filecoin Virtual Machine (FVM) facilitates a more secure and decentralized storage solution for the NFT metadata in this project, ensuring enhanced data integrity and accessibility while promoting a transparent and trustworthy supply chain ecosystem.

### Libraries and Tools:
- **jsQR**: A pure JavaScript library for QR code decoding.
- **IPFS/Web3.Storage**: InterPlanetary File System for decentralized storage of product metadata.
- **ethers.js**: A library for interacting with the Ethereum blockchain.

## Smart Contract

The TraceItAcross smart contract is deployed on the Scroll Sepolia testnet & Filecoin Virtual Machine calibration testnet. It is responsible for the creation and retrieval of product NFTs. Businesses can create product NFTs by providing a metadata URI, and consumers can retrieve product information using the product ID.

- **Smart Contract Address on Scroll Sepolia Testnet**: [0x4f9f01E346d67E982bBBA24f482B622E9fa2F738](https://sepolia-blockscout.scroll.io/address/0x4f9f01E346d67E982bBBA24f482B622E9fa2F738#code)
- **Smart Contract Address on Filecoin Calibration Testnet**: [0xb0Cd8839E7F6E749D349a5fBe5eAd7FF8711F8d8](https://calibration.filfox.info/en/address/0xb0Cd8839E7F6E749D349a5fBe5eAd7FF8711F8d8)


## Getting Started

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Setup the .env file by using the .envexample file.
3. Start the local development server using `npm start`.
4. Open your web browser and navigate to `http://localhost:3000` to access the TraceItAcross platform.
5. Use the platform to register new products or look up existing products using the QR code scanner or manual Product ID entry.

## Future Enhancements

1. **Mobile Compatibility**: Enhance the QR code scanner functionality for mobile devices.
2. **Enhanced Product Metadata**: Allow for more detailed product metadata, including images, videos, and other multimedia.
3. **Blockchain Upgrades**: Explore deployment on other blockchain networks for improved scalability and lower transaction costs.
