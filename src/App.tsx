import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import JobListing from './pages/JobListing/JobListing'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
