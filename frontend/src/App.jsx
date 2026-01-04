
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import './index.css'
import About from './pages/About'
import Order from './pages/Order'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/order' element={<Order/>}/>
    </Routes>
     
    </>
  )
}

export default App
