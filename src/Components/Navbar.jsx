import React from "react";
import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Navbar=()=>{
 return   <nav className="mb-20 flex items-center justify-between py-6 h-[75px]">
 <div className="flex flex-shrink-0 items-center">
   <img src={logo} alt="logo" width="100px" height="100px" />
 </div>
 <div className="m-8 flex items-center justify-center gap-4 text-white text-2xl">
    <a href="/"><FaLinkedin  /></a>
    <a href=""><FaGithub /></a>
    <a href=""><FaEnvelope/></a>
 </div>
</nav>
};

export default Navbar;
