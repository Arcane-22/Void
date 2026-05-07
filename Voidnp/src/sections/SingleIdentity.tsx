
import Tick from '../assets/tick.svg'
import Identity from '../assets/Identity.svg'

function SingleIdentity() {
  return (
    <section className='identity-section'>
        <img src={Identity} alt="girl using laptop image" className='identity-image' />
        <div className='identity-text'>
            <img src={Tick} alt="verified badge" className='verified-image' id='identity-bg'/>
            <h2 className='identity-heading'>A Single Verified Identity For Every Teacher<span className="dot">.</span></h2>
            <p>Void Teachers is a centralized platform that allows educators to create one professional profile 
            and complete their identity, qualification, and experience verification in a single place. 
            Instead of submitting documents repeatedly for different schools, platforms, or opportunities, 
            teachers can rely on one trusted and verified identity.</p>
            <p>Once verified, your profile becomes portable and can be used across multiple systems, helping institutions quickly trust your credentials 
            while saving your time and effort. It is designed to bring consistency, credibility, and convenience to the entire teaching ecosystem.</p>
        </div>
    </section>
  )
}

export default SingleIdentity