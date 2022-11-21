import {React, useEffect, useState} from 'react'

export const TeamList = () => {

  const[team , setTeams] = useState();


  useEffect(
    () => {
      const fetchTeams = async() =>{
        const response = await fetch('http://localhost:8080/home/teams/');
        const data = await response.json();
        setTeams(data);
        //console.log(data);
      };
      fetchTeams();
    
    }
);

  return (
    <div className = 'TeamList'>
        <h1>Team List</h1>
        <p>{team?.[0]}</p>
        <p>{team?.[1]}</p>
        <p>{team?.[2]}</p>
        <p>{team?.[3]}</p>
        <p>{team?.[4]}</p>
        <p>{team?.[5]}</p>
        <p>{team?.[6]}</p>
        <p>{team?.[7]}</p>
        <p>{team?.[8]}</p>
        


    </div>
  )
}

export default TeamList