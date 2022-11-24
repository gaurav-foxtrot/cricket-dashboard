import React from 'react'

export default function MatchSmall({teamName,match}) {
  if (!match) return null;
  const oppositeTeam = match.team1 === teamName ? match.team2 : match.team1;
 
  return (
    <div>
        <h4> vs {oppositeTeam}</h4>
        <h4>won by {match.winningTeam}</h4>
        <h4>{match.season}</h4>
        <br></br>
    </div>
  )
}

