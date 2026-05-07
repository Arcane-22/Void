import WhyCard, {type featuresProps } from "./WhyCard";

const featuresData: featuresProps[] = [
  {
    icon: "src/assets/Icon5.svg",
    iconAlt: "No repeated verification icon",
    title: "No Repeated Verification",
    description:
      "Complete your verification once and reuse your profile across multiple platforms without submitting the same documents again. Save time, reduce effort, and avoid repeating the same process.",
    isHighlighted: false,
  },
  {
    icon: "src/assets/Icon6.svg",
    iconAlt: "Faster access icon",
    title: "Faster Access To Opportunities",
    description:
      "Use your verified profile to instantly access jobs, platforms, and institutions without delays. Skip long onboarding processes and get recognized faster with a trusted identity.",
    isHighlighted: true, // center card
  },
  {
    icon: "src/assets/Icon7.svg",
    iconAlt: "Credibility icon",
    title: "Stronger Professional Credibility",
    description:
      "A verified profile builds trust with institutions and improves your professional presence. Stand out with a reliable identity that showcases your qualifications and authenticity.",
    isHighlighted: false,
  },
];

function WhyCardList() {
  return (
    <article className='why-list'>
        {featuresData.map(data => <WhyCard key={data.title} data= {data}/>)}
    </article>
  )
}

export default WhyCardList