import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import DashboardLayout from './DashboardLayout'
import ProfilePage from './sections/ProfilePage'
import VerificationPage from './sections/VerificationPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<ProfilePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="verification" element={<VerificationPage />} />
      </Route>
    </Routes>
  )
}

export default App