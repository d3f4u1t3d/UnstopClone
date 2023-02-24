import { Routes, Route } from "react-router-dom";
import "./Theme/Theme.css";
import Compete from "./Pages/Compete/Compete.js";
import Learn from "./Pages/Learn/Learn.js";
import Practice from "./Pages/Practice/Practice.js";
import Login from "./Pages/Login/Login.js";
import Homepage from "./Pages/Homepage/Homepage.js";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage title="Unstop: Connecting talent, colleges, & recruiters!" />
          }
        />
        <Route
          path="/courses"
          element={
            <Learn title="Unstop Course & Cohorts | Get your dream job!" />
          }
        />
        <Route
          path="/practice"
          element={<Practice title="Practice Assessments & Mocks | Unstop" />}
        />
        <Route
          path="/compete"
          element={
            <Compete title="Competitions, Hackathons, & Case Challenges | Participate Now" />
          }
        />
        <Route path="/login" element={<Login title="Login to Unstop.com" />} />
      </Routes>
    </div>
  );
}

export default App;
