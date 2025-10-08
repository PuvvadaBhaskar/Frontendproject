import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-hero">
      <header className="home-header">
        <div className="brand">HOME STAY CONNECT</div>
        <nav className="top-nav">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Bookings</a>
          <a href="#">Contact</a>
        </nav>
        <div className="location">Current Location</div>
      </header>

      <div className="hero-card">
        <h2>Find Your Perfect Homestay</h2>
        <p className="subtitle">Explore local insights and unique stays</p>

        <div className="search-row">
          <input className="search-input" placeholder="Where are you going" />
          <input className="search-input" placeholder="Check-in  check-out" />
          <input className="search-input" placeholder="Travelers" />
        </div>

        <button className="search-btn">Search</button>
      </div>
    </div>
  )
}

export default Home
