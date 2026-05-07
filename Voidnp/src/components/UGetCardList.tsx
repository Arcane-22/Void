import UGetCard, { type UGetProps } from "./UGetCard";
import Icon8 from '../assets/passport.svg'
import Icon9 from '../assets/checkmark-square-03.svg'
import Icon10 from '../assets/link-04.svg'
import Icon11 from '../assets/security-check.svg'
import Icon12 from '../assets/arrow-reload-horizontal.svg'
import Icon13 from '../assets/database.svg'

const uGetData: UGetProps[] = [
  {
    icon: Icon8,
    iconAlt: "Teacher ID icon",
    title: "Unique Void Teacher ID",
    description:
      "Get A Unique Digital Identity That Represents You Across All Platforms. Your Void ID Becomes Your Single Login And Trusted Professional Identity Everywhere.",
  },
  {
    icon: Icon9,
    iconAlt: "Verified credentials icon",
    title: "Verified Credentials System",
    description:
      "Your Identity, Qualifications, And Experience Are Carefully Reviewed And Verified, Helping Institutions Trust Your Profile Instantly Without Repeated Checks.",
  },
  {
    icon: Icon10,
    iconAlt: "Shareable profile icon",
    title: "Shareable Verified Profile",
    description:
      "Easily Share Your Profile Using A Secure Link Or QR Code, Allowing Institutions And Platforms To View Your Verified Information Instantly.",
  },
  {
    icon: Icon11,
    iconAlt: "Secure data icon",
    title: "Secure Data",
    description:
      "Your Data Is Protected With Encryption And Privacy Controls, Giving You Full Authority Over What Information Is Visible And Who Can Access It.",
  },
  {
    icon: Icon12,
    iconAlt: "Cross platform icon",
    title: "Cross-Platform Access",
    description:
      "Use Your Void Teacher Account Across BetterSchool, Track Hiring, And Future Platforms Without Creating Separate Accounts Or Repeating Verification.",
  },
  {
    icon: Icon13,
    iconAlt: "Centralized system icon",
    title: "Centralized System",
    description:
      "Store And Manage Your Certificates, Identity Proofs, And Documents In One Place, Making It Easy To Update And Access Them Anytime.",
  },
];

function UGetCardList() {
  return (
    <div className="uget-grid">
        {uGetData.map(data => <UGetCard key={data.title} data={data}/>)}
    </div>
  )
}

export default UGetCardList