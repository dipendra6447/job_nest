import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import JobListing from './pages/JobListing/JobListing'
import Marketplace from './pages/Marketplace/Marketplace'
import JobDetails from './pages/JobDetails/JobDetails'
import Subscription from './pages/Subscription/Subscription'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListing />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
