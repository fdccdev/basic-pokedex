import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Detail from './components/Detail'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
