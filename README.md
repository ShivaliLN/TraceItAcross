<img src="./logo.png" alt="TrackItAcross Logo" width="200"/>

# TrackItAcross

## Overview

_TrackItAcross_ is an innovative platform designed to track products using blockchain technology. By utilizing NFTs (Non-Fungible Tokens), businesses can create unique digital representations of their products, allowing consumers to trace the authenticity and origins of the items they purchase. The platform offers a seamless interface for consumers to scan a QR code on the product, which retrieves and displays all relevant information about the product from the blockchain.

## Features

1. **Product Registration**: Businesses can register their products on the blockchain by creating NFTs.
2. **Product Lookup**: Consumers can easily look up product information by scanning a QR code or entering the Product ID.
3. **QR Code Scanner**: A built-in QR code scanner for easy product lookups.
4. **Blockchain-powered**: Utilizing Ethereum blockchain to store product information securely and transparently.
5. **Responsive UI**: A user-friendly interface for both businesses and consumers.

## Tech Stack

### Frontend:
- **React.js**: Powers the frontend, enabling a dynamic and interactive user interface.

### Blockchain:
- **Solidity**: Smart contract programming language used for creating the TrackItAcross contract on the Ethereum blockchain.
- **Scroll Sepolia**: The smart contract is deployed on the Scroll Sepolia testnet for lower transaction costs and efficient scalability.

### Libraries and Tools:
- **jsQR**: A pure JavaScript library for QR code decoding.
- **IPFS/Web3.Storage**: InterPlanetary File System for decentralized storage of product metadata.
- **ethers.js**: A library for interacting with the Ethereum blockchain.

## Smart Contract

The TrackItAcross smart contract is deployed on the Scroll Sepolia testnet. It is responsible for the creation and retrieval of product NFTs. Businesses can create product NFTs by providing a metadata URI, and consumers can retrieve product information using the product ID.

- **Smart Contract Address on Scroll Sepolia Testnet**: [0x2DB23AeB020bd7755c4480Cb2d3c687e7548A506](https://sepolia-blockscout.scroll.io/address/0x2DB23AeB020bd7755c4480Cb2d3c687e7548A506#code)

## Getting Started

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Start the local development server using `npm start`.
4. Open your web browser and navigate to `http://localhost:3000` to access the TrackItAcross platform.
5. Use the platform to register new products or look up existing products using the QR code scanner or manual Product ID entry.

## Future Enhancements

1. **Mobile Compatibility**: Enhance the QR code scanner functionality for mobile devices.
2. **Enhanced Product Metadata**: Allow for more detailed product metadata, including images, videos, and other multimedia.
3. **Blockchain Upgrades**: Explore deployment on other blockchain networks for improved scalability and lower transaction costs.
