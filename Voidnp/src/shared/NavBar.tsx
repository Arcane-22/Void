
import { Link } from 'react-router-dom'
import Logo from '../assets/Logos.svg'
import diagonalArrow from '../assets/diagonal-arrow.svg'

function NavBar() {
  return (
    <nav className='navbar'>
        <Link to="/"><img src={Logo} alt="logo" className='logo'/></Link>
        <ul className='nav-links'>
            <li>How it Works</li>
            <li>Features</li>
            <li>Why Choose Us</li>
        </ul>
        <div className='nav-btn'>
            <Link to="/login"><button id="signin-btn">Sign In</button></Link>
            <Link to="/dashboard"><button id="verified-btn">Get Verified<img src={diagonalArrow} /></button></Link>
        </div>
    </nav>
  )
}

export default NavBar