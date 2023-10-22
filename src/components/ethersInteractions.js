import { ethers } from 'ethers';

const SCROLL_SEPOLIA_CONTRACT = "0x4f9f01E346d67E982bBBA24f482B622E9fa2F738"; // Scroll Sepolia Test contract - "0x2DB23AeB020bd7755c4480Cb2d3c687e7548A506"; //"0xAFf7DB634b6903Ae9870deb5DED1058E75aA3219";
const FILECOIN_CALIBRATION_CONTRACT ="0xb0Cd8839E7F6E749D349a5fBe5eAd7FF8711F8d8"  // Filecoin Calibration Testnet
const JSONRPC_SCROLL = "https://sepolia-rpc.scroll.io/";
const contractJSON = require('./TrackItAcross.json');
const contractABI = contractJSON.abi;
const TESTNET_CONTRACT = SCROLL_SEPOLIA_CONTRACT;

let provider;
let contract;

async function initEthers() {
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      provider = new ethers.providers.Web3Provider(window.ethereum);  // Updated line
      contract = new ethers.Contract(TESTNET_CONTRACT, contractABI, provider.getSigner());  // Updated line
    } catch (error) {
      console.error("User denied account access:", error);
    }
  } else {
    console.error("No ethereum injection found");
  }
}

// Initialize ethers and contract instance when module is loaded
initEthers();

export const createProduct = async (uri) => {
  console.log('URI in createProduct:', uri);  // Log the URI to check its value
  
  if (provider && contract) {
    const signer = provider.getSigner();
    const contractWithSigner = contract.connect(signer);

    try {
      const tx = await contractWithSigner.createProduct(uri);
      await tx.wait();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  } else {
    console.error("Ethers initialization failed");
  }
};

export const getProduct = async (productId) => {
  if (provider && contract) {
    try {
      const product = await contract.getProduct(productId);
      return product;
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  } else {
    console.error("Ethers initialization failed");
  }
};

export const verifyProduct = async (productId) => {
  if (provider && contract) {
      try {
          const signer = provider.getSigner();
          const contractWithSigner = contract.connect(signer);
          const tx = await contractWithSigner.verifyProduct(productId);
          await tx.wait();
      } catch (error) {
          console.error("Error verifying product:", error);
      }
  } else {
      console.error("Ethers initialization failed");
  }
};
