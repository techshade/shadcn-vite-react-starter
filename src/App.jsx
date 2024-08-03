import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { PopoverDemo } from './_compo/PopOver'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
    <PopoverDemo />
    </>
  )
}

export default App
