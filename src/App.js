import { useState } from "react";

function App() {
  const[counter,setCounter]=useState(0);
  return (
    <div className="main">
   <h3>Counter App</h3>
     <h1>{counter}</h1>
     <div className="upc">
     <div className="btn">
     <button id="Increase" onClick={() => setCounter(prev=>prev +1)}>Increase</button>
     <button  id="Reset"onClick={() => setCounter(0)}>Reset</button>
     <button id="Decrease" onClick={() => setCounter(prev=>prev -1)}>Decrease</button>
     </div>
    </div>
    </div>
  );
}

export default App;
