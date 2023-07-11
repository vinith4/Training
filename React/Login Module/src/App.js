import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { BootLogin } from "./components/bootstrap_login/BootLogin";
import { BootRegister } from "./components/bootstrap_register/BootRegister";
import { BootForgotPass } from "./components/bootstrap_login/BootForgotPass";
import { BootDashboard } from "./components/bootstrap_dashboard/BootDashboard";
import { Navbar } from "./components/bootstrap_dashboard/navbar/Navbar";
import { Home } from "./components/bootstrap_dashboard/home/Home";
import { Projects } from "./components/bootstrap_dashboard/projects/Projects";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BootLogin/>} />
        <Route path="/login" element={<BootLogin/>} />
        <Route path="/forgotpassword" element={<BootForgotPass/>} />
        <Route path="/register" element={<BootRegister/>} />
        <Route path="/dashboard" element={<><Navbar /><BootDashboard /></>} />
        <Route path="/dashboard/home" element={<><Navbar /><Home /></>} />
        <Route path="/dashboard/projects" element={<><Navbar /><Projects /></>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
