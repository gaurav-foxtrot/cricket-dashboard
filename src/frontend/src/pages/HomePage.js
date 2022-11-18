import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar';

import RecentMatches from '../components/RecentMatches';
import TeamList from '../components/TeamList';

export const  HomePage = () => {

   


 

  return (
    <div className='HomePage'>
    

        <Navbar />  
        <RecentMatches />
        <TeamList />
   
    </div>
  );
}

export default HomePage