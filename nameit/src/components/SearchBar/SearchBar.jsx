import React from 'react';
import './SearchBar.css';

export default function SearchBar({onInputChange}){
    return(
        <div className='searchbar-container'>
            <input 
            onChange={(event)=>onInputChange(event.target.value)}
            placeholder='Type Keywords' 
            className='search-bar'></input>
        </div>
    )
}