import React, { useState } from 'react'
import './App.css'
import Tv from './components/Tv.js';
import Control from './components/Control'

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