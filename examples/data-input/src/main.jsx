import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> Mustr be removed for FreslerTable row/column dragging to work
  <App />
  // </React.StrictMode>,
)
