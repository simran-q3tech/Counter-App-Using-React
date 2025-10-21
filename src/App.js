import React, {useState} from "react";
import './App.css';

function App(){
  const [count, setCount]=useState(0);
  return (
    <div className="container"> 
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={()=>setCount(count+1)}> Increase </button>
      <button onClick={()=>setCount(count-1)}> Decrease </button> 
    </div>
  );
}
export default App;