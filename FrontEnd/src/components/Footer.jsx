import "../assets/Components/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="footer-left">
          <h2>HelaiNusa</h2>
          <div className="social-icons">
            <a href="#">
              <img alt="TikTok Icon" src="/landingpage/tiktok-icon.png" />
            </a>
            <a href="#">
              <img alt="Instagram Icon" src="/landingpage/instagram-icon.png" />
            </a>
            <a href="#">
              <img alt="Facebook Icon" src="/landingpage/facebook-icon.png" />
            </a>
            <a href="#">
              <img alt="WhatsApp Icon" src="/landingpage/whatsapp-icon.png" />
            </a>
          </div>
          <p>2024 Local Fashion Website</p>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <Link to="/Signup">Make a new account</Link>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Language</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
