import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import LinkedIn from '../assets/Linkedin.png'

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact"  },
  { label: "Careers",  href: "/careers"  },
  { label: "About",    href: "/about"    },
];

const SERVICES = ["Web Development", "Mobile App Development", "Digital Marketing and Branding"];

const SOCIAL_LINKS = [
  {label: Instagram, href: "https://instagram.com", aria: "Instagram" },
  {label: Facebook, href: "https://facebook.com", aria: "Facebook" },
  {label: LinkedIn, href: "https://linkedin.com", aria: "LinkedIn" },
];

function Footer() {
  return (
    <footer>
      <div className='footer-top'>
        <div className="footer-left">
          <nav aria-label="Social media">
            <ul className="footer-socials">
              {SOCIAL_LINKS.map(({label, href, aria }) => (
                <li key={aria}>
                  <a href={href} aria-label={aria} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={label} alt={aria} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="footer-address">
            <p>info@voidnepal.com.np</p>
            <p>977+ 9808349417</p>
          </address>
        </div>

        <div className="footer-right">
          <nav aria-label="Site links">
            <ul className="footer-nav">
              {NAV_LINKS.map(({ label}) => (
                <li key={label}>
                    {label}
                </li>
              ))}
            </ul>
          </nav>
          <p className="services">{SERVICES.map((service) => (
            <span key={service}>{service}</span>
          ))}</p>
        </div>
      </div>

        <h1>VOID TEACHER</h1>
        <div className='divider'></div>
        <div className="footer-bottom">
            <small className="copyright">© 2025 Void Nepal. All Rights Reserved.</small>
            <p className="location">Kathmandu, Nepal</p>
        </div>
    </footer>
  )
}

export default Footer