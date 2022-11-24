import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

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
    <div className='recentmatches'>
       <h1 className='py-4  '>Recent Matches</h1>
      <Link to ={`/home/${match?.[0]?.[0]}`}>  <h3 className='team py-4'>{match?.[0]?.[0]} vs {match?.[0]?.[1]}</h3></Link>
      <Link to ={`/home/${match?.[1]?.[0]}`}><h3 className='team py-4'>{match?.[1]?.[0]} vs {match?.[1]?.[1]}</h3></Link>
      <Link to ={`/home/${match?.[2]?.[0]}`}><h3 className='team py-4'>{match?.[2]?.[0]} vs {match?.[2]?.[1]}</h3></Link>
      <Link to ={`/home/${match?.[3]?.[0]}`}><h3 className='team py-4'>{match?.[3]?.[0]} vs {match?.[3]?.[1]}</h3></Link>
      <Link to ={`/home/${match?.[4]?.[0]}`}><h3 className='team py-4'>{match?.[4]?.[0]} vs {match?.[4]?.[1]}</h3></Link>
</div>

  );
}

export default RecentMatches