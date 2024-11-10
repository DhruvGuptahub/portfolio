import React from 'react'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/Project' element={< Project />}></Route>
          <Route path='/About' element={< About />}></Route>
          <Route path='/Contact' element={< Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
