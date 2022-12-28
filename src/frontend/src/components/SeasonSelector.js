import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

export default function SeasonSelector() {
    const[matches, setMatches] = useState([]);
    const{teamName, year} = useParams();
    useEffect(()=>{
        const fetchMatches = async() =>{
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
            const data = await response.json();
            setMatches(data);
            console.log(data);
        };
        fetchMatches();
    },
    []);
  
    return (

       
        <div className="relative w-full lg:max-w-sm  ">
               <a className="px-4 py-2 text-sm text-white rounded-full">
              Season
            </a>
            <select className="pl-5 pt-1 pb-1 pr-5  text-gray-500 bg-white border rounded-xl shadow-sm outline-none appearance-none focus:border-indigo-600 text-center">
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>

            </select>
        </div>
    );
}