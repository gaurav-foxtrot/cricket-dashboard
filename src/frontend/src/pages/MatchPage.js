import React from 'react'
import MatchDetail from '../components/MatchDetail'
import Navbar from '../components/Navbar'
import TeamList from '../components/TeamList'

function MatchPage() {


  return (
    <div>
       
        <h1>MatchDetail</h1>
        <Navbar />
        <h1>{team.teamName}</h1>
        <MatchDetail />

    </div>
    
    
  )
}

export default MatchPage