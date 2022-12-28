import React from 'react'
import SeasonSelector from './SeasonSelector'

function ScoreCard() {
  return (
    <div className='ScoreCard m-auto mb-9 '>
      <SeasonSelector />  
      <button class="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full float-right ">Scorecard </button>
      
    </div>
  )
}

export default ScoreCard