import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const SignIn = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // TODO: Replace with actual API call to your backend
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error('Sign in failed')
      }
      
      const data = await response.json()
      console.log('Sign in successful:', data)
      
      // Store token and navigate
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      
      onNavigate('home')
    } catch (error) {
      setError(error.message || 'Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar currentPage="signin" />
      <div className="auth-container">
        <div className="auth-box">
          <h2 className="auth-title">Sign In</h2>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              className="auth-button"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Login'}
            </button>
            <p className="auth-text">
              Don't have an account?{' '}
              <span 
                className="auth-link" 
                onClick={() => onNavigate('register')}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn