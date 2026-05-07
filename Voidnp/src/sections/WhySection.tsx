import WhyCardList from "../components/WhyCardList"


function WhySection() {
  return (
    <section className='why-section'
    onMouseEnter={e => e.currentTarget.classList.add('hovered')}
    onMouseLeave={e => e.currentTarget.classList.remove('hovered')}
    >
        <div className="why-text">
          <h2 className="why-heading">Why Teachers Choose Void<span className='dot'>.</span></h2>
          <p>Void Teachers is built to simplify how educators manage their professional identity. By reducing repetitive tasks, improving trust, 
          and creating a unified system, it helps teachers focus more on opportunities and less on administrative effort.</p>
        </div>
        <article className='why-cards'>
            <WhyCardList/>
        </article>
    </section>
  )
}

export default WhySection