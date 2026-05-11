
import { Link } from 'react-router-dom'
import Logo from '../assets/Logos.svg'
import diagonalArrow from '../assets/diagonal-arrow.svg'

function NavBar() {
  return (
    <nav className='navbar'>
        <img src={Logo} alt="logo" className='logo'/>
        <ul className='nav-links'>
            <li>How it Works</li>
            <li>Features</li>
            <li>Why Choose Us</li>
        </ul>
        <div className='nav-btn'>
            <button id="signin-btn">Sign In</button>
            <Link to="/dashboard"><button id="verified-btn">Get Verified<img src={diagonalArrow} /></button></Link>
        </div>
    </nav>
  )
}

export default NavBar