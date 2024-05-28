import "../assets/Componets/Login.css";
import "./Signup.jsx";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page-child"></div>
      <div className="login-parent">
        <div className="login">Login</div>
        <div className="login-wrapper">
          <div className="dont-have-an">Login</div>
        </div>
        <div className="your-email-parent">
          <div className="your-email">Your Email</div>
          <div className="frame-child"></div>
          <div className="your-email">Password</div>
          <div className="frame-child"></div>
          <div className="rectangle-parent">
            <div className="frame-inner"></div>
            <div className="i-agree-to-container">
              <span>I agree to the </span>
              <span className="privacy-policy">privacy policy</span>
            </div>
          </div>
        </div>
      </div>
      <div className="login-to-your-account-parent">
        <div className="login-to-your">Login to Your Account</div>
        <div className="dont-have-an-account-wrapper">
          <a href="/Signup">
            <div className="dont-have-an">Don’t have an account?</div>
          </a>
        </div>
      </div>
      <div className="logo-parent">
        <img className="logo-icon" alt="" src="/logo.png" />
        <div className="i-agree-to-container">HelaiNusa.</div>
      </div>
    </div>
  );
};

export default Login;
