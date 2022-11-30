import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
export const TeamList = () => {

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
       <div  className = 'TeamList bg-slate-400 rounded-xl p-10 px-10 mx-4 top-4  '>
       <h1 className='teamheading font-bold  text-2xl'>Team List</h1><br/>

       <div>
          <h3 className='box'><Link to ='/home/Mumbai Indians' >{team?.[0]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Pune Warriors' >{team?.[1]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Sunrisers Hyderabad' >{team?.[2]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Gujarat Titans' >{team?.[3]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Lucknow Super Giants' >{team?.[4]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Rajasthan Royals' >{team?.[5]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Kolkata Knight Riders' >{team?.[6]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Royal Challengers Bangalore' >{team?.[7]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Punjab Kings' >{team?.[9]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Rising Pune Supergiant' >{team?.[10]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Kochi Tuskers Kerala' >{team?.[11]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Delhi Capitals' >{team?.[12]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Kings XI Punjab' >{team?.[13]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Deccan Chargers' >{team?.[14]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Rising Pune Supergiants' >{team?.[15]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Chennai Super Kings' >{team?.[16]}</Link></h3><br/>
          <h3 className='box'><Link to ='/home/Gujarat Lions' >{team?.[8]}</Link></h3><br/>
      </div>

        </div> 
      </div>
    
  
  )
}

export default TeamList