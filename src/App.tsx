import { useState, Suspense, FC } from 'react'
import { useRoutes } from 'react-router-dom'
import route from '@/route';
import Loading from '@/components/Loading';

const App: FC<{}> = () => {
  const [count, setCount] = useState(0)
  const element = useRoutes(route)

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        {element}
      </Suspense>
    </div>
  )
}

export default App
