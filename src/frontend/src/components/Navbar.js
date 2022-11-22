import React from 'react'
import { AiFillHome, AiFillCalendar,AiFillPieChart, AiOutlineComment } from "react-icons/ai";

export const Navbar = () => {
  return (
    
    <div className='fixed top-0 left-0 h-screen w-16  flex flex-col bg-gray-900 text-white shadow rounded-tr-2xl rounded-br-2xl'>
        {/* <i>Home</i>
        <i>Records</i>
        <i>Charts</i>
        <i>About</i> */}
        <NavbarIcon icon ={<AiFillHome size = "28"  /> }  />
        <NavbarIcon icon = {<AiFillCalendar size = "28" />} />
        <NavbarIcon icon = {<AiFillPieChart size = "28" />} />
        <NavbarIcon icon = {<AiOutlineComment size = "28"/>} />
 
    </div> 

    
  );
};

const NavbarIcon = ({icon, text = 'tooltip'}) =>(
<div className = 'navbar-icon'>
    {icon}

    <span className="navbar-tooltip group-hover:scale-100">
    {text}
    </span>
</div>   
);

export default Navbar