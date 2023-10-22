import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.png';  // Assuming logo.png is in the assets folder
import '../styles.css';  // Importing the styles

function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="logo-section">
          <img src={logo} alt="TraceItAcross Logo" className="logo-image" />
          <div className="logo-text">TraceItAcross</div>
        </div>
        <nav>
          <ul>
            <li><Link to="/register">Register Product</Link></li>
            <li><Link to="/verify">Verify Product</Link></li>
            <li><Link to="/history">Product History</Link></li>
          </ul>
        </nav>
      </header>
      <section className="info-section">
        <h2>Revolutionizing Supply Chain Transparency with Blockchain</h2>
        <p>
          Welcome to TraceItAcross, a trailblazer in infusing blockchain technology into supply chains. By creating unique digital identifiers for products as Non-Fungible Tokens (NFTs), businesses and consumers are now empowered with a trustworthy and unalterable record of product journeys from production to consumption. Every product's story is just a scan away. Dive into a new era of transparent, verifiable, and secure supply chains with TraceItAcross.
        </p>
        <ul>
          <li>Tokenization of products as NFTs on the Ethereum blockchain.</li>
          <li>Deployment on Scroll's Sepolia testnet for lower transaction costs and higher throughput.</li>
          <li>Deploying on Filecoin Virtual Machine (FVM) facilitates a more secure and decentralized storage solution for the NFT metadata in this project, ensuring enhanced data integrity and accessibility while promoting a transparent and trustworthy supply chain ecosystem.</li>
          <li>Utilization of web3.storage for persistent and reliable access to product information.</li>
          <li>QR code scanning for easy product lookups and verifiable product authenticity.</li>
        </ul>
       
      </section>
    </div>
  );
}

export default Home;
