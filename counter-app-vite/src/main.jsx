import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { CounterApp } from './CounterApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={0} /> */}
    <App title="Hola, Soy Vegeta" ></App>
  </React.StrictMode>,
)