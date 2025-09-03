import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = ({ onNavigate }) => {
  const services = [
    {
      title: "Fixed Deposit",
      description: "Earn high interest with safe investments."
    },
    {
      title: "Gold Loan",
      description: "Quick approval and competitive interest rates."
    },
    {
      title: "Personal Loan",
      description: "Instant loans for your personal needs."
    },
    {
      title: "Vehicle Finance",
      description: "Own your dream vehicle with easy EMIs."
    }
  ]

  const stats = [
    { number: "45+", text: "Years of Trust" },
    { number: "₹2.5L Cr+", text: "Assets Managed" },
    { number: "3000+", text: "Branches Across India" }
  ]

  return (
    <div>
      <Navbar currentPage="home" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Secure Your Future With Us</h1>
          <p>Trusted financial solutions for every need.</p>
          <button 
            className="btn"
            onClick={() => onNavigate('signin')}
          >
            Get Started
          </button>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2>{stat.number}</h2>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default Home