import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';  // Importing the styles
import { createProduct } from './ethersInteractions';
import { Web3Storage } from 'web3.storage';

function RegisterProduct() {
  const [formData, setFormData] = useState({
    name: '',
    batchNumber: '',
    productionDate: '',
    origin: '',
    description: '',
    imageUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const metadata = {
      name: formData.name,
      description: formData.description,
      image: formData.imageUrl,
      attributes: [
        { trait_type: "Batch Number", value: formData.batchNumber },
        { trait_type: "Production Date", value: formData.productionDate },
        { trait_type: "Geographical Origin", value: formData.origin },
        // ... other attributes
      ]
    };
    const client = new Web3Storage({ token: "" }); //process.env.REACT_APP_WEB3_STORAGE
    const metadataBlob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
    const metadataFile = new File([metadataBlob], "metadata.json", { type: 'application/json' });
    try {
      const cid = await client.put([metadataFile]);  // Assign response directly to cid
      console.log('CID:', cid);  // Log the CID to check its value
      if (cid) {
        const uri = `https://ipfs.io/ipfs/${cid}/metadata.json`;
        await createProduct(uri);
      } else {
        console.error('CID is undefined');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="register-product-container">
      <header>
        <div className="logo">TrackItAcross</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/history">Product History</Link></li>
          </ul>
        </nav>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" onChange={handleInputChange} />
        <input type="text" name="batchNumber" placeholder="Batch Number" onChange={handleInputChange} />
        <input type="date" name="productionDate" onChange={handleInputChange} />
        <input type="text" name="origin" placeholder="Geographical Origin" onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Product Description" onChange={handleInputChange} />
        <input type="text" name="imageUrl" placeholder="Image URI" onChange={handleInputChange} />
        <button type="submit">Register Product</button>
      </form>
    </div>
  );

}

export default RegisterProduct;
