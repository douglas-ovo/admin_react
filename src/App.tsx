import { useState } from 'react'
import './App.less'
import Charts from '@/pages/Charts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Charts/>
    </div>
  )
}

export default App
