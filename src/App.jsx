import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Stories from './Components/Stories/Stories'
import Creator from './Components/Creator/Creator'
import Community from './Components/Community/Community'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Stories />} />
          <Route path='/creator' element={<Creator />} />
          <Route path='/community' element={<Community />} />
          <Route path='/subscribe' element={<Subscribe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
