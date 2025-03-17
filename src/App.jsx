import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FizzBuzz} from "./FizzBuzz/FizzBuzz.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FizzBuzz />
    </>
  )
}

export default App
