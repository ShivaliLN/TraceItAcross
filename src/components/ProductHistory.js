// ProductHistory.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';  // Importing the QRCode component
import '../styles.css';  // Importing the styles
import { getProduct } from './ethersInteractions';

function ProductHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [qrValue, setQrValue] = useState('https://trackitacross.com/product/12345');  // Placeholder QR code value

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const product = await getProduct(searchQuery);
    setQrValue('https://red-spatial-angelfish-279.mypinata.cloud/ipfs/' + product.id);  // Assuming 'id' is a field in the returned product object
  };

  const handleQrScanDemo = () => {
    alert('Simulating QR code scan...');
    // Simulate fetching product information using the QR code value
    // In reality, you would use the QR code value to fetch product information from the smart contract/IPFS
  };

  return (
    <div className="product-history-container">
      <header>
        <div className="logo">TrackItAcross</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register Product</Link></li>
          </ul>
        </nav>
      </header>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Enter Product Identifier or Scan QR Code" onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      <div className="qr-code-section">
        <QRCode value={qrValue} size={128} />  {/* Generating the QR code */}
        <button onClick={handleQrScanDemo}>Scan QR Code (Demo)</button>
      </div>
      {/* Display product information here */}
    </div>
  );
}

export default ProductHistory;
