import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Login from './containers/Signup'
import Signup from './containers/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> */}
       </Routes>
    </>
  )
}

export default App
