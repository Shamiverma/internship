import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Navbar from "./Component/Navbar";
import "./index.css";
import{BrowserRouter} from "react-router-dom";
import Footer from './Component/footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
    </BrowserRouter>
    </StrictMode>
);
    
   