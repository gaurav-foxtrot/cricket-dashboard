import {React, useEffect, useState} from 'react'


export const RecentMatches = () => {

  const[match , setMatches] = useState([]);

  const fetchMatches = async() =>{
    const response = await fetch('http://localhost:8080/home/matches/');
    const data = await response.json();
    setMatches(data);
    //console.log(data);
    for(const a in data){
      console.log(data[a]);
    }

    // setMatches([]);
    // for(const key in data){
    //   if(data.hasOwnProperty(key)){
    //     setMatches((match) => [...match,data[key]]);
    //   }
    // }
    // console.log(match);
  };

  useEffect(() => {  
      fetchMatches();
    },[]);
   
  return (
    <div className='RecentMatches'>
       <h1>Recent Matches</h1>

      <div className="card w-96 bg-base-100 bg-slate-800  shadow-xl">
  <div className="card-body text-white" >
  {match.map((data) =>{
    return(<h1>{data[0]} vs {data[1]}</h1>)})}
    <div className="card-actions justify-end">

 
    </div>
  </div>
</div>
</div>
  );
}

export default RecentMatches