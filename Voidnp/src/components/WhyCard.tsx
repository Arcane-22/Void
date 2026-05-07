export interface featuresProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

function WhyCard({data}: {data: featuresProps}) {
  return (
    <article className={`why-card ${data.isHighlighted ? "highlighted" : ""}`}>
        <img src={data.icon} alt={data.iconAlt}className='why-icon' />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
    </article>
  )
}

export default WhyCard