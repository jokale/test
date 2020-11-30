import React from 'react'
import './App.css';
import Rates from './components/Rates';
// import axios from 'axios'

class App extends React.Component {


      
  
  render(){

 
  return (
    <div className="App">
      <h1>Exchange rates </h1>
      <Rates/>
    </div>
       ); 
  }
}

export default App;
