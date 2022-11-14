import React from 'react';
import './Header.css';

export default function Header({headerExpanded}){
    return(
        <>
        <div className='headcontainer'>
        <img src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' 
        className={`head-img ${headerExpanded ? 'head-img-expanded':'head-img-contrasted'}`} alt='logo'/>
        <h1 className={`head-text ${headerExpanded ? 'head-text-expanded':'head-text-contrasted'}`}>Name It!  </h1>
        </div>
        </>
    )
}