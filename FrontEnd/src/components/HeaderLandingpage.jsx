import "../assets/Components/HeaderLandingpage.css";
import { Link } from "react-router-dom";

const HeaderLandingpage = () => {
  return (
    <header>
      <section className="logo">
        <Link to="/Signup">
          <img src="/logo.png" alt="HelaiNusa Logo" />
          <span className="logo-text">HelaiNusa.</span>
        </Link>
      </section>

      <nav className="right-menu">
        <Link to="/Login">
          <img src="/landingpage/user-icon.png" alt="Account" />
        </Link>
      </nav>
    </header>
  );
};

export default HeaderLandingpage;
