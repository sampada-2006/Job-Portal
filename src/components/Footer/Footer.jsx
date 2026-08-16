import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* For Candidates */}
          <div className={styles.footerColumn}>
            <h3>For Candidates</h3>

            <a href="#">About us</a>
            <a href="#">Candidates</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>

          {/* For Employers */}
          <div className={styles.footerColumn}>
            <h3>For Employers</h3>

            <a href="#">Jobs</a>
            <a href="#">Saved Jobs</a>
            <a href="#">For Employers</a>
            <a href="#">Terms & Service</a>
          </div>
          {/* Company */}
          <div className={styles.footerColumn}>
            <h3>Company</h3>

            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>

          {/* Legal + Social Icons */}
          <div className={styles.footerColumn}>
            <h3>Legal</h3>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>

              <a href="#" aria-label="Twitter">
                <FiTwitter />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </a>

              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className={styles.footerBottom}>
          <span>Copyright © 2022 Nexus Jobs. All rights reserved.</span>

          <span>Nexus Jobs</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
