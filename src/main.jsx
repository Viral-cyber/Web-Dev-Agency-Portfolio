import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* GLOBAL RESET */
const style = document.createElement('style')
style.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    background: #050505;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: 'Inter', system-ui, sans-serif;
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #050505; 
  }
  ::-webkit-scrollbar-thumb {
    background: #333; 
    border-radius: 4px;
  }
`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
