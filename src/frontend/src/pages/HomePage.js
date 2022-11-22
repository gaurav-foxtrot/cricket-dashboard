import {Fragment, React, useEffect, useState} from 'react'
import MatchDetail from '../components/MatchDetail';
import Navbar from '../components/Navbar';

import RecentMatches from '../components/RecentMatches';
import TeamList from '../components/TeamList';


export const  HomePage = () => {

   


 

  return (
    <div className='HomePage '>
    
        <Navbar />  
      
        <div><RecentMatches /></div>
        <div><TeamList /></div>  
      
       
   
    </div>
  );
}

export default HomePage