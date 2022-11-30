import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MatchDetail from '../components/MatchDetail';
import MatchSmall from '../components/MatchSmall';
import Navbar from '../components/Navbar';


function MatchPage() {
    const[team,setTeam] = useState({matches:[]});
    const{teamName} = useParams();
    

    useEffect(
        () =>{
    
        const fetchMatches = async() =>{
            const response = await fetch(`http://localhost:8080/home/${teamName}`)
            const data = await response.json();
            //console.log(data);
            setTeam(data);
        };
        fetchMatches();
    },[teamName]
    );

    // console.log(team.matches && team.matches.map(match => console.log(match.team1)));
    if(!team || !team.teamName){
      return <h1 className="text-center">Team Not Found! Try another team</h1>
    }
  return (
    <div>
    <div className='MatchPage'>
        <Navbar />
         <h1 className='Heading  text-4xl'>{team.teamName} Match Card</h1><br/>
         
         <h2 className='matchdetails text- text-xl'>Match Details</h2><br/>
        <MatchDetail teamName={team.teamName} match = {team.matches[0]} /><br></br>
      </div>
    <div className='smallcard  '>
        {team.matches.slice(1).map(match => <MatchSmall teamName={team.teamName} match={match}/>)}
    
    </div>
    </div>
    
  )
}

export default MatchPage