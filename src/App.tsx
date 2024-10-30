import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Checkout from "./components/checkout";

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
