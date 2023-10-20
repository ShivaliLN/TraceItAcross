// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.png';  // Assuming logo.png is in the assets folder
import '../styles.css';  // Importing the styles

function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="logo-section">
          <img src={logo} alt="TrackItAcross Logo" className="logo-image" />
          <div className="logo-text">TrackItAcross</div>
        </div>
        <nav>
          <ul>
            <li><Link to="/register">Register Product</Link></li>
            <li><Link to="/history">Product History</Link></li>
          </ul>
        </nav>
      </header>
      <section className="info-section">
        <p>
          Welcome to TrackItAcross, a platform revolutionizing supply chain transparency by tokenizing products as NFTs.
          This solution ensures product authenticity from production to consumption, providing a trustworthy and unalterable
          record of each product's journey. Register your products, verify their authenticity, and allow consumers to trace
          the journey of the products they purchase. Dive into a new era of transparent, verifiable, and secure supply chains
          with TrackItAcross.
        </p>
      </section>
    </div>
  );
}

export default Home;
