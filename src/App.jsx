import { useState } from 'react'
import './App.css'
import { Button } from '@chakra-ui/react'



function App() {
  const [count, setCount] = useState(0)

  return <>
    {/* <Button>
    hello
    </Button> */}
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </>
}

export default App
