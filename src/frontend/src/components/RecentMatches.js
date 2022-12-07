import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import csk from './images/Chennai-Super-Kings-Logo-PNG.png'
import kkr from './images/Kolkata-Knight-Riders-Logo-PNG.png'
import dc from './images/Deccan-Chargers-Logo-PNG.png'
import kxip from './images/Kings-XI-Punjab-Logo-PNG.png'
import mi from './images/Mumbai-Indians-Logo-PNG.png'
import delcap from './images/Delhi-Capitals-Logo-PNG.PNG'
import rcb from './images/Royal-Challengers-Bangalore-Logo-PNG.png'
import rr from './images/Rajasthan-Royals-Logo-PNG.png'

export const RecentMatches = () => {

  const[match , setMatches] = useState([]);
 

 
  useEffect(
    () => {
    const fetchMatches = async() =>{
      const response = await fetch('http://localhost:8080/home/matches/');
      const data = await response.json();
      setMatches(data);
      // console.log(data); 
    };
    fetchMatches()
   
  },[]
);
   
  return (
    <div className='recentmatches  '>
       <h1 className='font-bold text-2xl'>Recent Matches</h1><br></br>
       <div className='box1'>
        <Link to ={`/home/${match?.[0]?.[0]}`}>  
          <h3 className='team py-4 '><img className='image' src={kkr} alt="" />
           {match?.[0]?.[0]}    vs    {match?.[0]?.[1]}
           <img className='image' src={rcb} alt="" />  </h3>
      </Link>
      </div><br></br>



      <div className='box1'><Link to ={`/home/${match?.[1]?.[0]}`}>
        <h3 className='team py-4'><img className='image' src={csk} alt="" />
        {match?.[1]?.[0]} vs {match?.[2]?.[0]}
        <img className='image' src={rr} alt="" />
        </h3></Link>
      </div><br></br>



      <div className='box1'><Link to ={`/home/${match?.[2]?.[0]}`}>
        <h3 className='team py-4'>
          <img className='image' src={rr} alt="" />
        {match?.[2]?.[0]} vs {match?.[2]?.[1]}
        <img className='image' src={delcap} alt="" />
        </h3></Link>



      </div><br></br>
      <div className='box1'><Link to ={`/home/${match?.[3]?.[0]}`}>
      <h3 className='team py-4'>
      <img className='image' src={mi} alt="" />
        {match?.[3]?.[0]} vs {match?.[2]?.[1]}
        <img className='image' src={delcap} alt="" />
        </h3></Link>
      </div><br></br>


      <div className='box1'><Link to ={`/home/${match?.[4]?.[0]}`}>
        <h3 className='team py-4'>
        <img className='image' src={delcap} alt="" />
          {match?.[4]?.[0]} vs {match?.[3]?.[1]}
          <img className='image' src={rcb} alt="" />
          </h3></Link>
      </div>
     </div>

  );
}

export default RecentMatches