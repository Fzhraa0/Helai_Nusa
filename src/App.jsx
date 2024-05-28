import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";
import Signup from "./pages/Signup";
import Signupafterinput from "./pages/signupafterinput";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupafter" element={<Signupafterinput />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
