import React from 'react';
import './NameCard.css'

export default function NameCard({suggestedName}){
    return(
        <div className='result-name-card'>
            <p className='result-name'>{suggestedName}</p> 
            {console.log(suggestedName)}
        </div>
    )
}