import JourneryCardList from "../components/JourneryCardList"


function JourneySection() {
  return (
    <section className='journey-section'
      onMouseEnter={e => e.currentTarget.classList.add('hovered')}
      onMouseLeave={e => e.currentTarget.classList.remove('hovered')}
    >
      <div className="journey-text">
        <h2 className="journey-heading">Your Journery To Verification<span className='dot'>.</span></h2>
      </div>
      <article>
        <JourneryCardList/>
      </article>
    </section>
  )
}

export default JourneySection