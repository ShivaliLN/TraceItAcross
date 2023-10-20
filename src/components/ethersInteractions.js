import { Contract, JsonRpcProvider, Wallet, BrowserProvider } from 'ethers';

const SCROLL_SEPOLIA_CONTRACT= "0xc6d321c0cC595265d7C8e4e462c0f0b614171099"; // Replace with your contract address Scroll Sepolia
const FVM_CALIB_CONTRACT= "0xc6d321c0cC595265d7C8e4e462c0f0b614171099" //FVM Testnet
const contractAddress = SCROLL_SEPOLIA_CONTRACT;

const JSONRPC_SCROLL="https://sepolia-rpc.scroll.io/"
const JSONRPC_FVM="https://api.calibration.node.glif.io/rpc/v1"
const jsonRPC =JSONRPC_SCROLL


const contractABI = [
  // your contract ABI
];

const provider = new JsonRpcProvider(jsonRPC);
const contract = new Contract(contractAddress, contractABI, provider);


export const createProduct = async (formData) => {
  const signer = provider.getSigner();
  const contractWithSigner = contract.connect(signer);
  try {
    const tx = await contractWithSigner.createProduct(
      formData.name,
      formData.batchNumber,
      formData.productionDate,
      formData.origin,
      formData.description,
      formData.imageUrl
    );
    await tx.wait();
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

export const getProduct = async (productId) => {
  try {
    const product = await contract.getProduct(productId);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};
