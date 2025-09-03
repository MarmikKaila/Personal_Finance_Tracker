import React, { useState } from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />
      case 'signin':
        return <SignIn onNavigate={handleNavigate} />
      case 'register':
        return <Register onNavigate={handleNavigate} />
      default:
        return <Home onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  )
}

export default App