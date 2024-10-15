import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
