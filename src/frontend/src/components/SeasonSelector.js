import React from 'react'

function SeasonSelector() {



    let seasons = [];
    

    for(let i= 2008; i<= 2022; i++){
        seasons.push(i);
    }

    return (
        <div className=' text-left'>
            <h1 className=' text-center'>{seasons[0]}</h1>
            <h1 className=' text-center'>{seasons[1]}</h1>
            <h1 className=' text-center'>{seasons[2]}</h1>
            <h1 className=' text-center'>{seasons[3]}</h1>
            <h1 className=' text-center'>{seasons[4]}</h1>
            <h1 className=' text-center'>{seasons[5]}</h1>
            <h1 className=' text-center'>{seasons[6]}</h1>
            <h1 className=' text-center'>{seasons[7]}</h1>
            <h1 className=' text-center'>{seasons[8]}</h1>
            <h1 className=' text-center'>{seasons[9]}</h1>
            <h1 className=' text-center'>{seasons[10]}</h1>
            <h1 className=' text-center'>{seasons[11]}</h1>
            <h1 className=' text-center'>{seasons[12]}</h1>
            <h1 className=' text-center'>{seasons[13]}</h1>
            <h1 className=' text-center'>{seasons[14]}</h1>
        
        
        
        
        
        </div>
    )

}

export default SeasonSelector



