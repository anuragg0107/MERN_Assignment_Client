import Signin from "./Component/Signin/Signin";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Signup from "./Component/Signup/Signup";
import Otp from "./Component/Otp/Otp";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/otp' element={<Otp /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
