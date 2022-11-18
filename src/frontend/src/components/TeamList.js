import {React, useEffect, useState} from 'react'

export const TeamList = () => {

  const[team , setTeams] = useState();


  useEffect(
    () => {
      const fetchTeams = async() =>{
        const response = await fetch('http://localhost:8080/home/teams/');
        const data = await response.json();
        setTeams(data);
        console.log(data);
      };
      fetchTeams();
    
    },[]
);

  return (
    <div className = 'TeamList'>
        <h1>Team List</h1>
        <p>{team}</p>
        
    </div>
  )
}

export default TeamList