import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chatpage from './pages/Chatpage/Chatpage'
import { ThemeProvider } from 'styled-components'
import { all } from './data/theme'
import { GlobalStyles } from './Global.styled'

const App = () => {

  const { darkTheme } = all;
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Chatpage />} />


        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
