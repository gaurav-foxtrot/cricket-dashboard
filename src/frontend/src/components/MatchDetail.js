import React from 'react'

export default function MatchDetail({match}) {
if(!match) return null;
  return (
  
    <div className='MatchDetail'>

      <h4>{match.team1} vs {match.team2}</h4>
    </div>
  
    )
}

//localhost:3000/teams/{teamName}
