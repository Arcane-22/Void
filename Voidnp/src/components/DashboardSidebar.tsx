import {NavLink, useNavigate } from "react-router-dom"
import UserCard from "./UserCard"
import VerificationStatusCard from "./VerificationStatusCard"

function DashboardSidebar() {

    const navigate= useNavigate()

    const handleLogout = ()=>{
        navigate("/login")
    }
  return (
<aside className="sidebar">
  <UserCard />
  <p>My Dashboard</p>
  <nav className="sidebar-nav">
    <NavLink
    to="/dashboard/profile"
    className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
    >
    Profile
    </NavLink>
    <NavLink
    to="/dashboard/verification"
    className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
    >
    Verification
    </NavLink>
    <button onClick={handleLogout} className="logout-btn">Log Out</button>
  </nav>
  <VerificationStatusCard />
</aside>
  )
}

export default DashboardSidebar