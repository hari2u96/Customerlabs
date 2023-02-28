import React, { useState } from 'react'
import "./App.css"
import Popup from './Components/Popup'

function App() {
  const [openPop,setOpenPop]=useState(false)
  return (
    <div className='App'>
    <div className='save'>
      <button className='openPopbtn' onClick={()=>{setOpenPop(true)}}>Save Segment</button>
    </div>
    <div>
      
    </div>
    {openPop && <Popup setPopOpen={setOpenPop}/>}
    </div>
  )
}

export default App