import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DashboardNavbar from "./components/DashboardNavbar";


function App() {
  return (
   
      <Router>
         <div className="bg-gray-100">        <DashboardNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
      </Router>
  
  );
}

export default App;
