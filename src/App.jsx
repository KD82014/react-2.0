import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
   import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard";
// import MealStats from "./components/MealStats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/meal" element={<MealStats />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
