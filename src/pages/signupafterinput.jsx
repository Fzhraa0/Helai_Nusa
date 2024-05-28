import "../assets/Componets/Signupafterinput.css";

const Signup = () => {
  return (
    <div className="sign-up-page-after-input">
      <div className="sign-up-page-after-input-child"></div>
      <div className="sign-up-page-after-input-item"></div>
      <div className="sign-up-parent">
        <div className="sign-up">Sign Up</div>
        <div className="frame-parent">
          <div className="input-field-parent">
            <div className="input-field">
              <div className="input-label">First Name</div>
              <div className="input-value-wrapper">
                <div className="input-value">John</div>
              </div>
            </div>
            <div className="input-field">
              <div className="input-label">Last Name</div>
              <div className="input-value-wrapper">
                <div className="input-value">Thor</div>
              </div>
            </div>
          </div>
          <div className="input-field2">
            <div className="input-label">Email</div>
            <div className="input-value-frame">
              <div className="input-value">John@example.com</div>
            </div>
          </div>
          <div className="input-field2">
            <div className="input-label">Password</div>
            <div className="input-value-frame">
              <div className="input-value">********</div>
            </div>
          </div>
          <div className="checkbox-parent">
            <div className="checkbox">
              <div className="checkbox-off">
                <div className="checkbox-off">
                  <div className="checkbox-off"></div>
                  <div className="componentuicheckboxchecked-item"></div>
                  <img
                    className="componentuicheckboxchecked-inner"
                    alt=""
                    src="Vector 1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="input-label">
              <span>I agree to the </span>
              <span className="privacy-policy">privacy policy</span>
            </div>
          </div>
        </div>
        <div className="sign-up-wrapper" id="frameContainer1">
          <div className="sign-up1">Sign Up</div>
        </div>
      </div>
      <div className="logo-parent">
        <img className="logo-icon" alt="" src="../logo.png" />
        <div className="input-label">HelaiNusa.</div>
      </div>
      <div className="create-a-new-account-parent">
        <div className="create-a-new">Create a New Account</div>
        <div className="button">
          <div className="sign-up1">Already have an account?</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
