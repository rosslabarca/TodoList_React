import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import App from './App.jsx'
import './index.css'
import {ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Header />   
     <App />
     </ChakraProvider>
  </React.StrictMode>,
)
