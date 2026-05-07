import React from 'react'

export type UGetProps = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
};

function UGetCard({data}: {data: UGetProps}) {
  return (
    <article className= {`uget-card ${data.isHighlighted ? "highlighted" : ""}`}>
      <div className="uget-top">
          <img src={data.icon} alt={data.iconAlt} className='get-image'/>
      </div>
      <div className="uget-text">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
      </div>
    </article>
  )
}

export default UGetCard