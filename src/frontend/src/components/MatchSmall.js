import React from 'react'
import {Link} from 'react-router-dom'

export default function MatchSmall({teamName,match}) {
  if (!match) return null;
  const oppositeTeam = match.team1 === teamName ? match.team2 : match.team1;
  const oppositeTeamRoute = `/home/${oppositeTeam}`;
  return (
    <div className='MatchSmall px-4' >
      <div  className='bg-slate-900 text-white text-center rounded-xl m'>
        <h4> vs <Link to ={oppositeTeamRoute}> {oppositeTeam}</Link></h4>
        <h4>won by {match.winningTeam}</h4>
        <h4>{match.season}</h4>
        <br></br>
        </div>
    </div>
  )
}

