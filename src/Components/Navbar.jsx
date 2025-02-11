import React from "react";
import logo from "../assets/assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";


const Navbar=()=>{
 return   <nav className="bg-blue-900 mb-20 flex items-center justify-between py-6 h-[75px]">
 <div className="flex flex-shrink-0 items-center">
   <img src={logo} alt="logo" width="75px" height="75px" />
 </div>
 <div width="50px" height="50px">
    <FaLinkedin className="text-white text-[30px]"/>
 </div>
</nav>
};

export default Navbar;
