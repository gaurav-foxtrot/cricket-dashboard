import {React, useState, useEffect} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useParams } from 'react-router-dom';





function Chart1() {
    const[team,setTeam] = useState({matches:[]});
    const{teamName} = useParams();

    useEffect(
        () =>{
    
        const fetchMatches = async() =>{
            const response = await fetch(`http://localhost:8080/home/${teamName}`)
            const data = await response.json();
            //console.log(data);
            setTeam(data);
        };
        fetchMatches();
    },[teamName]
    );

    if(!team || !team.teamName){
        return <h1 className="text-center">Team Not Found! Try another team</h1>
      }


  return (
    <div>
            <br></br><br></br><h1 className=' text-center  font-semibold  ' >{team.teamName}</h1><br></br><br></br>
            <h1>{team.Season}</h1>
           
         <PieChart
  data={[
    { title: 'Wins', value: team.totalWins , color: 'rgb(0 128 101)' },
    { title: 'Losses', value: team.totalMatches = team.totalMatches - team.totalWins , color: 'rgb(255 0 101)' }
  ]} radius="50"  />

</div>
  )
}

export default Chart1