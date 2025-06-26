// App.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Website</h1>
      <ul className="flex space-x-6">
        <Link to={"/"} className="hover:underline cursor-pointer">Home</Link>
        <Link to={"/about"} className="hover:underline cursor-pointer">About</Link>
        <Link to={"/services"} className="hover:underline cursor-pointer">Services</Link>
        <Link to={"/contact"} className="hover:underline cursor-pointer">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar





