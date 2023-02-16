import React, { useState } from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const [name,setName] = useState("");
    
    const handleChange = (event) =>{
        setName(event.target.value);
    }
  return (
    <div>

    Name:<input type="text" onChange={handleChange}/> 
    <Welcome name={name} />
   </div> 
  )
}


export default App;
