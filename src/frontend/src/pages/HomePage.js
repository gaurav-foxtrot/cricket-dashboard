import { React} from 'react';
import MatchSmall from '../components/MatchSmall';
//import { Routes, Route, useNavigate} from 'react-router-dom';

import Navbar from '../components/Navbar';

import RecentMatches from '../components/RecentMatches';
import TeamList from '../components/TeamList';
import MatchPage from './MatchPage';


export const  HomePage = () => {


  return (
    
    <div className='HomePage '>
    <div className='topbar fixed top-0 h-10 w-screen bg-gray-900 text-white text-2xl'>
    <h1>HomePage</h1>
    </div>  
    
        <Navbar />  
      
        <div><RecentMatches /></div>
        <div><TeamList /></div> 
      

      
      
        
   
    </div>
  );
}

export default HomePage