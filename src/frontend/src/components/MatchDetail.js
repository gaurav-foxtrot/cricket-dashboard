import React from 'react'
import {Link} from 'react-router-dom'
import ScoreCard from './ScoreCard';


export default function MatchDetail({teamName,match}) {

  if(!match) return null;
const oppositeTeam = match.team1 === teamName ? match.team2 : match.team1;
const oppositeTeamRoute =  `/home/${oppositeTeam}`; 
const isMatchWon = teamName === match.winningTeam;


return (
    
    <div className={isMatchWon ? 'won-card' : 'lost-card' }   >

      <Link to = {oppositeTeamRoute}><h3>vs {oppositeTeam}</h3></Link>
      <h3>Date - {match.date}</h3>
      <h3>held at {match.venue} in {match.city}</h3>
      <h3>Season - {match.season}</h3>
      <h3>Toss won by {match.tossWinner} and decided to {match.tossDecision} first</h3>
      <h3>{match.winningTeam} won by {match.margin} {match.wonBy}</h3>
      <h3>Man of the Match - {match.playerOfMatch} </h3>
      <h3>Umpires for the match - {match.umpire1} and {match.umpire2}</h3>
      <button class="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full float-right ">Scorecard </button>

      </div>

  
    )
}

//localhost:3000/teams/{teamName}
