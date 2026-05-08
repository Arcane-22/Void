import computer from "../assets/computer.svg";
import character from "../assets/character.svg";
import Vector from "../assets/Vector.svg";
import bubble from "../assets/bubble.svg";
import diagonalArrow from '../assets/diagonal-arrow.svg'

function BuildSection() {
  return (
    <section className="build-section">
        <header className="build-header">
        <h2 className="build-heading">Start Building Your Verified Identity Today<span className="dot">.</span></h2>
        <p>Join Void Teachers and build a unified, verified teacher profile that represents your identity across all connected platforms. Save time by eliminating repeated 
        verification, and gain access to better opportunities with a trusted profile that works everywhere you go.</p>
        <button id="verified-btn">Get Verified<img src={diagonalArrow} /></button>
        </header>
        <div className="image-container">
        <img src={computer} alt="computer Image" className="computer-img"/>
        <img src={character} alt="character Image" className="character-img" />
        <img src= {Vector} alt="vector Image" className="vector-img" />
        <img src = {bubble} alt="bubble Image" className="bubble-img" />
        </div>
    </section>
  )
}

export default BuildSection