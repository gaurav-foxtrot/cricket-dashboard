import {React, useEffect} from 'react'

import RecentMatches from '../components/RecentMatches';
import TeamList from '../components/TeamList';

export const  HomePage = () => {

    useEffect(
        () => {
          const fetchMatches = async() =>{
            const response = await fetch('http://localhost:8080/home/matches/');
            const data = await response.json();
            console.log(data);
          };
          fetchMatches();
        
        }
    );

  return (
    <div className='HomePage'>
        <h1>Home </h1>
        <RecentMatches />
       <TeamList />

    </div>
  );
}

export default HomePage