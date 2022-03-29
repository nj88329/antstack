import {BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Data from './Components/Data';
import store from "./store";
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function App() {
   //const {state}=store.getState();
  
console.log('state', store.getState());

const [product, setMovie]=useState([]);
const [start,setStart]=useState([false]);


// const amount=useSelector((state)=>
//     state.amount
// )
//   console.log('amount',amount)
 

const addMovie=async()=>{
  // var axios = require("axios").default;
  setStart(true)
  var options = {
    method: 'GET',
    url: 'https://walmart.p.rapidapi.com/products/list',

    //url='https://walmart.p.rapidapi.com/products/list'
    params: {
      cat_id: '0',
      pref_store: '2648,5434,2031,2280,5426',
      sort: 'best_seller',
      page: '1',
      zipcode: '94066'
    },
    headers: {
      'X-RapidAPI-Host': 'walmart.p.rapidapi.com',
      'X-RapidAPI-Key': 'af7aed117bmshc16ca4b3ef02621p133ea7jsn9080089734e1'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setMovie(response.data.items)
  }).catch(function (error) {
    console.error(error);
  });
 
}
  return(
    <div className="App" style={{display:'inline'}}>
      <div> <Navbar />
      {start!=true?
      <button style={{position:'fixed',alignItems:'center'}} onClick={addMovie} >Show Products</button>:
      ''
      }
      </div>


      
  <div style={{marginTOp:'50%'}}>
        {
          product!=null?
          
         <Data product={product}/> 
         :''     
        }
        
    </div>  
          <div>
          <h1 style={{position:'fixed',marginLeft:'40%'}}>
            CartValue:{0}
          </h1>

          </div>
    </div>
  );
}

export default App;
