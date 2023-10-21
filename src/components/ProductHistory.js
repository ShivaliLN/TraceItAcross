import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from './ethersInteractions';
import '../styles.css';
import DummyQR from '../DummyQR.png';

function ProductHistory() {
    const [productId, setProductId] = useState('');
    const [productData, setProductData] = useState(null);

    const handleProductIdChange = (event) => {
        setProductId(event.target.value);
    };

    const handleFetchProductData = async () => {
        if (productId !== '') {
            const productTuple = await getProduct(productId);
            const metadataUrl = productTuple[0];
            const response = await fetch(metadataUrl);
            const metadata = await response.json();
            setProductData(metadata);
        }
    };

    return (
        <div className="product-history-container">
            <header>
                <div className="logo">TrackItAcross</div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Register Product</Link></li>
                        <li><Link to="/verify">Verify Product</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="input-container">
                <img src={DummyQR} alt="Dummy QR" style={{ marginRight: '10px', width: '100px', height: '100px' }} />  {/* Display dummy QR code image */}
                <input
    type="text"
    placeholder="Enter Product ID"
    value={productId}
    onChange={handleProductIdChange}
    style={{ width: '150px' }} 
/>
                <button onClick={handleFetchProductData}>Scan</button>
            </div>
            {productData && (
                <div className="product-data">
                    <h2>Product Information</h2>
                    <p>Name: {productData.name}</p>
                    <p>Description: {productData.description}</p>
                    {productData.attributes.map((attr, index) => (
                        <p key={index}>{attr.trait_type}: {attr.value}</p>
                    ))}
                    <p>
                        <img src={`https://ipfs.io/ipfs/${productData.image}`} alt={productData.name} style={{ marginRight: '100px', width: '500px', height: '500px' }}/>
                    </p>
                </div>
            )}
        </div>
    );
}

export default ProductHistory;
