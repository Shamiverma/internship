import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Navbar from "./Component/Navbar";
import "./index.css";
import Footer from './Component/footer.jsx';
import Body from './Component/Body.jsx';
import { BrowserRouter as Router } from "react-router-dom"



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <Navbar />
    <App />
    <Footer />
  </Router>
    </StrictMode >
);

