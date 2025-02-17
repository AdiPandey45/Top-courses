import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const[text,setText]=useState('');


//variation-1 = rendered again and again as you make chnages to the component
// useEffect( ()=>{
//   console.log("ui rendering done");
// });

// // //variation-2 = rendered only once
// // useEffect ( ()=>{
// //   console.log("ab text bhi print hoga");
// // },[]);


const changeHandler = (event) => {
  console.log(event.target.value);
  setText(event.target.value); 
};

//variation-3 = rendered or console the part only when you are dealing with the specific part of the component
// useEffect(()=>{
//   console.log("rishta pakka");
// },[text]);


//variation-4

useEffect(()=>{
  //add event listener
  console.log("listener added");

  return ()=>{
    console.log("listner removed");
  }
},[text]);
 


  return ( 
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
