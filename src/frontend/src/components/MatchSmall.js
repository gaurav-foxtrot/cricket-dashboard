import React from 'react'

function MatchSmall({match}) {
  return (
    <div className='MatchSmall'>
     <h1> MatchSmall</h1>
      <p>{match.team1} vs {match.team2}</p>
      </div>
  )
}

export default MatchSmall