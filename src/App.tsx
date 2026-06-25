import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import JobListing from './pages/JobListing/JobListing'
import Marketplace from './pages/Marketplace/Marketplace'
import JobDetails from './pages/JobDetails/JobDetails'
import Subscription from './pages/Subscription/Subscription'
import SubscriptionLight from './pages/SubscriptionLight/SubscriptionLight'

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
          <Route path="/subscription-light" element={<SubscriptionLight />} />
          <Route path="/SubscriptionLight" element={<SubscriptionLight />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
