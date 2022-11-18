import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar';

import RecentMatches from '../components/RecentMatches';
import TeamList from '../components/TeamList';

export const  HomePage = () => {

   


 

  return (
    <div className='HomePage'>
      
      <div className={"bg-[#0e0e0e] min-h-screen "}></div>
        <Navbar />  
        <RecentMatches />
       <TeamList />

    </div>
  );
}

export default HomePage