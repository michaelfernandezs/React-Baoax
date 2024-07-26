import { useState } from "react";

import {Link} from "react-scroll"
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import baoax from '../assets/baoax.jpg'
const Navbar=()=>{
    const [click,setClick]=useState(false);
    const handleClick = ()=>setClick(!click);
    
    const content =
    <>
  
    <div  className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-gray-200 transition">
        <ul className="text-center text-xl p-20  text-black">
            <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-900 hover:bg-slate-800 hover:rounded"> Home </li>
            </Link >
            <Link  spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> Conocenos </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> Services </li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> Projects </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> Contact </li>
            </Link>
       
            
        </ul>
    </div>
    </>
    return(
       <nav>
        <div className="h-fit flex  justify-between z-50 text-black lg:py-5 px-20 py-2" >
            <div className="flex items-center flex-1">
                <img className="h-[50px] w-[70px] ml-" src={baoax} alt="Logo Baoax"/>   
            <span className="text - text-3xl font-bold text-white-500 ">Banco de alimentos de Oaxaca
             
            </span>
            </div>
        
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden" >
            <div  className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] text-white-500">
            <Link spy={true} smooth={true} to="Home">
            <li className="hover:text-green-600 transition border-b-2 "> Home </li>
            </Link > 
            <Link spy={true} smooth={true} to="About">
            <li className="hover:text-green-600 transition border-b-2 "> Conocenos </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
            <li className="hover:text-green-600 transition border-b-2 "> Donaciones </li>
            </Link>  
            <Link spy={true} smooth={true} to="Projects">
            <li className="hover:text-green-600 transition border-b-2 "> Contacto </li>
            </Link>
    
        </ul>
            </div>
        </div>
        <div>
            {click&&content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
           {click?<FaTimes/>:<CiMenuFries/>}
        </button>
        </div>

       </nav>

    );

}

export default Navbar;
