// Home.js
import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="logo">TrackItAcross</div>
        <nav>
          <ul>
            <li><a href="/register">Register Product</a></li>
            <li><a href="/history">Product History</a></li>
          </ul>
        </nav>
      </header>
      <section className="info-section">
        <p>TrackItAcross enhances supply chain transparency by tokenizing products as NFTs.</p>
        <button>View Coffee Beans Demo</button>
        <button>View Medication Demo</button>
      </section>
    </div>
  );
}

export default Home;
