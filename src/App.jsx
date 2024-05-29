import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
