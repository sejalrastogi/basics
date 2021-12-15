import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import Counter from './Components/Counter/counter.js'
import SayMyName from './Components/SayMyName/myName.js'

function App() {
  const saySejal = () => {
    alert("Sejal is the best");
    // return <h1>Sejal Sejal Sejal</h1>
  }


  
  // const [whoBest,setWhoBest] = useState("");

  return (
    <>
    <Navbar />
    <button onClick = {saySejal}> Who is the best? </button>
    {/* <button onClick = { () => setWhoBest("Sejal is the best and most ...")}>Who's Best</button>
    <h1>{whoBest}</h1> */}
    <SayMyName />
    <Counter />
    </>
  )
}

export default App
