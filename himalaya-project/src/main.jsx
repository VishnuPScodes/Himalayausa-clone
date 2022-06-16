import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
// import {authProvider} from './components/contexts/authContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
    <ChakraProvider>
    {/* <authProvider> */}
    <App />
    {/* </authProvider>    */}
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
