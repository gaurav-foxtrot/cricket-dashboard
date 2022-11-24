import React from 'react'
import {Link} from 'react-router-dom'
export default function MatchDetail({teamName,match}) {
if(!match) return null;
const oppositeTeam = match.team1 === teamName ? match.team2 : match.team1;
const oppositeTeamRoute =  `/home/${oppositeTeam}`; 
return (
  
    <div className='MatchDetail ' >

      <Link to = {oppositeTeamRoute}><h1>vs {oppositeTeam}</h1></Link>
      <h2>{match.date}</h2>
      <h2>held at {match.venue} in {match.city}</h2>
      <h2>Season - {match.season}</h2>
      <h2>Toss won by {match.tossWinner} and decided to {match.tossDecision} first</h2>
      <h2>{match.winningTeam} won by {match.margin} {match.wonBy}</h2>
      <h2>{match.playerOfMatch} </h2>
      <h2>{match.umpire1} and {match.umpire2}</h2>

    

    </div>
  
    )
}

//localhost:3000/teams/{teamName}
