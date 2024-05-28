import "../assets/Componets/Header.css";
import "../pages/Login.jsx";
import "../pages/Landingpage";

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <nav className="left-menu">
          <ul>
            <li>
              <a href="#men">Men</a>
            </li>
            <li>
              <a href="#women">Women</a>
            </li>
            <li>
              <a href="#accessories">Accessories</a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <a href="/Landingpage">
            <img src="/logo.png" alt="HelaiNusa Logo" />
            <span className="logo-text">HelaiNusa.</span>
          </a>
        </div>

        <nav className="right-menu">
          <ul>
            <li>
              <a href="#search">
                <img src="/landingpage/user-icon.png" alt="Search" />
              </a>
            </li>
            <li>
              <a href="/Login">
                <img src="/landingpage/user-icon.png" alt="Account" />
              </a>
            </li>
            <li>
              <a href="#wishlist">
                <img src="/landingpage/cart-icon.png" alt="Wishlist" />
              </a>
            </li>
            <li>
              <a href="#cart">
                <img
                  src="/landingpage/cart-icon.png"
                  alt="Cart"
                  id="cart-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
