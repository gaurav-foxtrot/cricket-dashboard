import {React, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Chart1 from '../components/Chart1';

import Navbar from '../components/Navbar';
import Chart2 from '../components/Chart2';




function ChartsPage() {
     // console.log(team.matches && team.matches.map(match => console.log(match.team1)));
     const[team , setTeams] = useState();
     useEffect(
      () => {
        const fetchTeams = async() =>{
          const response = await fetch('http://localhost:8080/home/teams/');
          const data = await response.json();
          setTeams(data);
          // console.log(data);
        };
        fetchTeams();
      
      },[]
  );


  return (
    <div >
    <h1 className='topbar fixed top-0 h-10 w-screen bg-gray-900 text-white text-2xl'>Charts pages</h1>
    
     <Navbar />
     
     <div className=' flex items-center justify-around'>
      {/* <div className='chart1s'> */}
        <div className="pl-10 pb-40">
     <Chart1 />
     </div>
     <br></br>
     <div>
      <Chart2 />  
      </div>
     
   
     <div className="pt-5" >
       <div  className = 'TeamList bg-slate-400 rounded-xl p-2 px-5  '>
       <h1 className='teamheading font-bold  text-2xl'>Team List</h1><br></br><br></br>

       <div>
          <h3 className='box'><Link to ='/charts/Mumbai Indians' >{team?.[0]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Pune Warriors' >{team?.[1]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Sunrisers Hyderabad' >{team?.[2]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Lucknow Super Giants' >{team?.[4]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Punjab Kings' >{team?.[9]}</Link></h3><br/>
          
          <h3 className='box'><Link to ='/charts/Kolkata Knight Riders' >{team?.[6]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Gujarat Lions' >{team?.[8]}</Link></h3><br/>
          </div>
        <div>
          <h3 className='box'><Link to ='/charts/Rising Pune Supergiant' >{team?.[10]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Kochi Tuskers Kerala' >{team?.[11]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Delhi Capitals' >{team?.[12]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Kings XI Punjab' >{team?.[13]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Deccan Chargers' >{team?.[14]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Royal Challengers Bangalore' >{team?.[7]}</Link></h3><br/>
          <h3 className='box'><Link to ='/charts/Chennai Super Kings' >{team?.[17]}</Link></h3><br/>
         
          </div>
        </div>
        </div>
      </div>
    
     </div>
    //  </div>
  
    
  )
}

export default ChartsPage