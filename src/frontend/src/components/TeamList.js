import {React, useEffect, useState} from 'react'

export const TeamList = () => {

  const[team , setTeams] = useState();


  useEffect(
    () => {
      const fetchTeams = async() =>{
        const response = await fetch('http://localhost:8080/home/teams/');
        const data = await response.json();
        setTeams(data);
        // console.log(data);
      };
      fetchTeams();
    
    },[]
);

  return (
    <div className = 'TeamList  '>
        <h1>Team List</h1>
        <i>{team?.[0]}</i><br/>
        <i>{team?.[1]}</i><br/>
        <i>{team?.[2]}</i><br/>
        <i>{team?.[3]}</i><br/>
        <i>{team?.[4]}</i><br/>
        <i>{team?.[5]}</i><br/>
        <i>{team?.[6]}</i><br/>
        <i>{team?.[7]}</i><br/>
        <i>{team?.[8]}</i><br/>
        <i>{team?.[9]}</i><br/>
        <i>{team?.[10]}</i><br/>
        <i>{team?.[11]}</i><br/>
        <i>{team?.[12]}</i><br/>
        <i>{team?.[13]}</i><br/>
        <i>{team?.[14]}</i><br/>
        <i>{team?.[15]}</i><br/>
        <i>{team?.[16]}</i><br/>
        
        


    </div>
  )
}

export default TeamList