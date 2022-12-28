import {React, useEffect, useState}  from 'react';
import { Legend, BarChart, Bar,  XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { useParams } from 'react-router-dom';


// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

export default function Chart2() {
  const[team,setTeam] = useState({matches:[]});
  const{teamName} = useParams();

  useEffect(
      () =>{
  
      const fetchMatches = async() =>{
          const response = await fetch(`http://localhost:8080/team/${teamName}/matches`)
          const data = await response.json();
          console.log(data);
          setTeam(data);
      };
      fetchMatches();
  },[teamName]
  );

  // if(!team || !team.teamName){
  //     return <h1 className="text-center">Team Not Found! Try another team</h1>
  //   }
    if(false){
      return <h1 className="text-center">Team Not Found! Try another team</h1>
    }
 
    return (
      <div>
          <h2 className='pb-9 text-center'>Seasonwise matches, wins</h2>
      
      <ResponsiveContainer width={600} height={300}>
    
      <BarChart 
        width={500}
        height={300}
        data={team}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="season" />
        <YAxis />
        <Tooltip />
        <Legend />

      
        <Bar dataKey="totalMatches" fill="#8884d8" />
        <Bar dataKey="totalWins" fill="#82ca9d" />
    
      </BarChart>
    </ResponsiveContainer>
    </div>
    );
  }
  