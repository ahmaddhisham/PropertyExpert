import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Navbar />
    <App />
    <Footer/>
  </StrictMode>
 </BrowserRouter>
)
