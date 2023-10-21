import { ethers } from 'ethers';

const SCROLL_SEPOLIA_CONTRACT = "0xAFf7DB634b6903Ae9870deb5DED1058E75aA3219";
const JSONRPC_SCROLL = "https://sepolia-rpc.scroll.io/";
const contractJSON = require('./TrackItAcross.json');
const contractABI = contractJSON.abi;

let provider;
let contract;

async function initEthers() {
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      provider = new ethers.Web3Provider(window.ethereum);
      contract = new ethers.Contract(SCROLL_SEPOLIA_CONTRACT, contractABI, provider);
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
