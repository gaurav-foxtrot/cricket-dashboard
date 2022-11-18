import {React, useEffect, useState} from 'react'


export const RecentMatches = () => {

  const[match , setMatches] = useState();

  useEffect(
    () => {
      const fetchMatches = async() =>{
        const response = await fetch('http://localhost:8080/home/matches/');
        const data = await response.json();
        setMatches(data);
        console.log(data);
      };
      fetchMatches();
    
    },[]
);
   
  return (
    <div className='RecentMatches'>
      <h1>Recent Matches</h1>
      <h3>{match}</h3>  
    
    </div>
  );
}

export default RecentMatches