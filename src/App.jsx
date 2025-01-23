import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunFactGenerator from './components/FactGenerate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
    <FunFactGenerator />
  </div>
  )
}

export default App
