import React from 'react'
import { useEffect, useState } from 'react';
import MatchSmall from './MatchSmall';

function MatchDetail() {

  const[team,setTeam] = useState({});

  useEffect(
      () =>{
  
      const fetchMatches = async() =>{
          const response = await fetch('http://localhost:8080/home/Deccan%20Chargers')
          const data = await response.json();
          console.log(data);
          setTeam(data);
      };
      fetchMatches();
  },[]
  );

  return (
    <div className='MatchDetail'>
     {team.matches.map(match => <MatchSmallCard match={match}/>)} 
     


   
    
    
    </div>
  
    )
}

export default MatchDetail