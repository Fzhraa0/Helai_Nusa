import "../assets/Componets/Signup.css";

const Signup = () => {
  return (
    <div className="sign-up-page" id="signUpPage">
      <div className="sign-up-page-child"></div>
      <div className="sign-up-page-item"></div>
      <div className="sign-up-parent">
        <div className="sign-up">Sign Up</div>
        <div className="frame-parent">
          <div className="input-field-parent">
            <div className="input-field">
              <div className="input-label">First Name</div>
              <div className="input-label-wrapper">
                <div className="input-label1">Input Label</div>
              </div>
            </div>
            <div className="input-field">
              <div className="input-label">Last Name</div>
              <div className="input-label-wrapper">
                <div className="input-label1">Input Label</div>
              </div>
            </div>
          </div>
          <div className="input-field2">
            <div className="input-label">Email</div>
            <div className="input-label-frame">
              <div className="input-label1">Input Label</div>
            </div>
          </div>
          <div className="input-field2">
            <div className="input-label">Password</div>
            <div className="input-label-frame">
              <div className="input-label1">Input Label</div>
            </div>
          </div>
          <div className="checkbox-parent">
            <div className="checkbox">
              <div className="checkbox-off">
                <div className="checkbox-off">
                  <div className="checkbox-off"></div>
                  <div className="componentuicheckboxchecked-item"></div>
                </div>
              </div>
            </div>
            <div className="i-agree-to-the-privacy-policy">
              <div className="i-agree-to-container">
                <span>I agree to the </span>
                <span className="privacy-policy">privacy policy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-up-wrapper">
          <div className="sign-up1">Sign Up</div>
        </div>
      </div>
      <div className="logo-parent">
        <img className="logo-icon" alt="" src="/landingpage/logo.png" />
        <div className="input-label">HelaiNusa.</div>
      </div>
      <div className="create-a-new-account-parent">
        <div className="create-a-new"> Create a New Account</div>
        <div className="button">
          <div className="sign-up1">Already have an account?</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
