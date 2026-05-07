export interface stepsProps {
  number: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

function JourneryCard({data}: {data: stepsProps}) {
  return (
    <article className= {`steps-card ${data.isHighlighted ? "highlighted" : ""}`}>
        <div className="steps-top">
            <img src={data.icon} alt={data.iconAlt} />
            <span className="step-number">{data.number}</span>
        </div>
        <div className="steps-text">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    </article>
  )
}

export default JourneryCard