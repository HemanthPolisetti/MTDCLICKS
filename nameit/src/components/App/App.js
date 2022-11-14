import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Result from '../Result/Result';
import Footer from '../Footer/Footer';
import './App.css';
const name = require('@rstacruz/startup-name-generator');
function App() {  
  const [headerExpanded,setHeaderExpanded]=useState(true)
  const [result,setResult]=useState([])
  const handleInputChange=(inputText)=>{
    setHeaderExpanded(inputText.length>0 ? false : true)
    setResult(inputText?name(inputText):[])
  }
  return (
    <div>
    <Header headerExpanded={headerExpanded}/>
    <SearchBar onInputChange={handleInputChange}  />
    <Result suggestedNames={result}/>
    <Footer />
    </div>
  );
}

export default App;
