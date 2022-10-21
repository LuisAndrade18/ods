import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/main/Main'
import Header from './components/header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header/>
      <Main/>
    </BrowserRouter>
  )
}

export default App