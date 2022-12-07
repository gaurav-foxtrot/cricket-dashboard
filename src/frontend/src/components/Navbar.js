import React from 'react'
import { AiFillHome, AiFillCalendar,AiFillPieChart, AiOutlineComment } from "react-icons/ai";
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <div className='fixed top-0 left-0 h-screen w-20  flex flex-col bg-gray-900 text-white shadow rounded-tr-2xl rounded-br-2xl'>
        <div><Link to = '/home' ><NavbarIcon  icon ={<AiFillHome size = "28"  /> }  /><h1 className='text-center'>Home</h1></Link>  
         </div>
        <NavbarIcon icon = {<AiFillCalendar size = "28" />} /><h1 className='text-center'>Records</h1>
        <div><Link to = '/charts/Mumbai Indians'><NavbarIcon icon = {<AiFillPieChart size = "28" />} /><h1 className='text-center'>Charts</h1></Link>
        </div>
        
        <NavbarIcon icon = {<AiOutlineComment size = "28"/>} /><h1 className='text-center'>About</h1>
 
    </div> 

    
  );
};

const NavbarIcon = ({icon}) =>(
<div className = 'navbar-icon'>
    {icon}
</div>   
);

export default Navbar