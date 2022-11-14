import React from 'react';
import NameCard from '../NameCard/NameCard';
import './Result.css'
export default function Result({suggestedNames}){
    const suggestedNamesJsx=suggestedNames.map(suggestedName=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })
    return(
        <div className='results-container '>
            {suggestedNames.length>0 && suggestedNamesJsx}
        </div>
    )
}