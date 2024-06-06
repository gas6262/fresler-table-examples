import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> // String mode must be removed to allow column drag and drop
    <App />
  // </React.StrictMode>,
)
