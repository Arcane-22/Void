import JourneyCard, { type stepsProps } from "./JourneryCard";

const stepsData: stepsProps[] = [
  {
    number: "01",
    icon: "src/assets/Icon1.svg",       
    iconAlt: "Create account icon",
    title: "Create Your Void Teacher Account.",
    description:
      "Sign up using your email or continue with your Void ID to securely create your account and get started with your Unified Teacher Identity Platform.",
    isHighlighted: false,
  },
  {
    number: "02",
    icon: "src/assets/Icon2.svg",   
    iconAlt: "Professional profile icon",
    title: "Build And Complete Your Professional Profile",
    description:
      "Add your personal details, academic qualifications, and teaching experience to create a complete and professional profile that represents your identity accurately.",
    isHighlighted: true,
  },
  {
    number: "03",
    icon: "src/assets/Icon3.svg",  
    iconAlt: "Submit documents icon",
    title: "Submit Your Documents For Verification Process.",
    description:
      "Upload your identity documents, certificates, and required proofs so our system can carefully review and begin verifying your credentials.",
    isHighlighted: false,
  },
  {
    number: "04",
    icon: "src/assets/Icon4.svg", 
    iconAlt: "Verified badge icon",
    title: "Get Verified And Use Across All Platforms",
    description:
      "Once your profile is verified, you can securely access and use your trusted identity across all connected platforms without repeating any steps.",
    isHighlighted: true,
  },
];

function JourneryCardList() {
  return (
    <div className="steps-list">
        {stepsData.map(data => <JourneyCard key={data.number} data={data}/>)}
    </div>
  )
}

export default JourneryCardList