import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
const IndexRouter = () => {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
    </Routes>
</Router>
  )
}

export default IndexRouter