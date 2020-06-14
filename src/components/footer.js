import React from "react"
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from "react-icons/ti"

const Footer = () => {
  return (
    <footer>
      <div className="container footerContainer">
        <div className="footerSocial">
          <div className="footerSocialText">Follow Us</div>
          <div className="footerSocialIcons">
            <a
              target="_blank"
              href="https://twitter.com/BoostCode"
              rel="noopener noreferrer"
            >
              <span className="footerSocialIconContainer" id="tw-icon">
                <TiSocialTwitter className="footerSocialIcon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/code-boost-7038341a7/"
              rel="noopener noreferrer"
            >
              <span className="footerSocialIconContainer" id="li-icon">
                <TiSocialLinkedin className="footerSocialIcon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/Code-Boost-102807441437727/"
              rel="noopener noreferrer"
            >
              <span className="footerSocialIconContainer" id="fb-icon">
                <TiSocialFacebook className="footerSocialIcon" />
              </span>
            </a>
          </div>
        </div>
        <div>© {new Date().getFullYear()} Site Name Here</div>
      </div>
    </footer>
  )
}
export default Footer
