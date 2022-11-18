import {React, useEffect, useState} from 'react'

import RecentMatches from '../components/RecentMatches';
import TeamList from '../components/TeamList';

export const  HomePage = () => {

   


 

  return (
    <div className='HomePage'>
      <h1>Home</h1>
        
        <RecentMatches />
       <TeamList />

    </div>
  );
}

export default HomePage