import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chatpage from './pages/chatpage/Chatpage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Chatpage/>}/>

      
    </Routes>
    </>
  )
}

export default App
