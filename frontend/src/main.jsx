import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Authprovider } from './store/Auth.jsx'
import  { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <Authprovider>
  <StrictMode>
    <App />
    <Toaster toastOptions={{
style: {
  fontSize: '1.5em' 
}
}}/>
  </StrictMode>
  </Authprovider>
)
