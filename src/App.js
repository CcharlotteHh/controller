import React, { useState } from 'react'
import './App.css'
import Tv from './Tv.js';
import Control from './Control'

function App () {

  const [selectedMode, setSelectedMode] = useState('open')
  return (
    <div className='app'>
      <Control setSelectedMode={setSelectedMode}/>
      <Tv selectedMode={selectedMode}/>
    </div>
  )
}

export default App