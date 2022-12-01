import React from 'react'
import {Link} from 'react-router-dom'

export default function MatchSmall({teamName,match}) {
  if (!match) return null;
  const oppositeTeam = match.team1 === teamName ? match.team2 : match.team1;
  const oppositeTeamRoute = `/home/${oppositeTeam}`;
  const isMatchWon = teamName === match.winningTeam;
  return (
    <div className=' px-1 text-white'>
      
        <div className={isMatchWon ? 'won-card' : 'lost-card' }   >
  
        <h4> vs <Link to ={oppositeTeamRoute}> {oppositeTeam}</Link></h4>
        <h4>won by {match.winningTeam}</h4>
        <h4>{match.season}</h4>
        <br></br>
        </div>
    </div>
  
  )
}

