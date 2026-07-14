import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTeam from './Components/AddTeam'
import ViewTeam from './Components/ViewTeam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ViewTeam />
    </>
  )
}

export default App
