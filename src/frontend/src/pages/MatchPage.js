import {React, useState, useEffect} from 'react';
import MatchDetail from '../components/MatchDetail';
import MatchSmall from '../components/MatchSmall';
import Navbar from '../components/Navbar';


function MatchPage() {
    const[team,setTeam] = useState({matches:[]});
    

    useEffect(
        () =>{
    
        const fetchMatches = async() =>{
            const response = await fetch('http://localhost:8080/home/Delhi%20Capitals')
            const data = await response.json();
            //console.log(data);
            setTeam(data);
        };
        fetchMatches();
    },[]
    );

    // console.log(team.matches && team.matches.map(match => console.log(match.team1)));

  return (
    <div className='MatchPage'>
         <h1>{team.teamName} Match Card</h1><br/>
         <h2>Latest Matches</h2><br/>
         <h2>Match Details</h2><br/>
        <MatchDetail match={team.matches[0]} />
        {team.matches.slice(1).map(match => <MatchSmall match={match}/>)}
    </div>
     
    
  )
}

export default MatchPage