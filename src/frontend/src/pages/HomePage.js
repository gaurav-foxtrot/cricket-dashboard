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
    
        <Navbar />  
      
        <div><RecentMatches /></div>
        <div><TeamList /></div> 
      

      
      
       
   
    </div>
  );
}

export default HomePage