import "../assets/Componets/EditProfile.css";
import Header from "../components/Header";

const EditProfile = () => {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">Edit Profile</header>
        <div className="content">
          <div className="card">
            <h2>Profile Information</h2>
            <p>Update your account's profile information and email address</p>
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Ayu" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Lestari" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Ayu@example.com" />
              </div>
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>

          <div className="card">
            <h2>Update Password</h2>
            <p>Ensure your account is using a long, random password</p>
            <form>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" />
              </div>
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
