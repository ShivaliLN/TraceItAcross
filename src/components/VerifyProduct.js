import React, { useState } from 'react';
import { verifyProduct } from './ethersInteractions';  // Assuming ethersInteractions is where your contract interactions are defined
import '../styles.css';  // Importing the styles
import { Link } from 'react-router-dom';
import { Web3Storage } from 'web3.storage'; 

function VerifyProduct() {
    const [productId, setProductId] = useState('');
    const [verificationDoc, setVerificationDoc] = useState(null);

    const handleProductIdChange = (event) => {
        setProductId(event.target.value);
    };

    const handleVerificationDocChange = (event) => {
        setVerificationDoc(event.target.files[0]);
    };

    const handleVerifyProduct = async () => {
        if (productId !== '' && verificationDoc) {
            const client = new Web3Storage({ token: "" });
            const verificationDocFile = new File([verificationDoc], "verificationDoc.json", { type: 'application/json' });
            
            try {
                const cid = await client.put([verificationDocFile]);  // Assign response directly to cid
                console.log('CID:', cid);  // Log the CID to check its value
                
                if (cid) {
                    await verifyProduct(productId);
                } else {
                    console.error('CID is undefined');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <div className="verify-product-container">
            <header>
        <div className="logo">TrackItAcross</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register Product</Link></li>
            <li><Link to="/history">Product History</Link></li>
          </ul>
        </nav>
      </header>
            <input
                type="text"
                placeholder="Enter Product ID"
                value={productId}
                onChange={handleProductIdChange}
            />
            <input
                type="file"
                onChange={handleVerificationDocChange}
            />
            <button onClick={handleVerifyProduct}>Verify</button>
        </div>
    );
}

export default VerifyProduct;
