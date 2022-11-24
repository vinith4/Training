import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Account from "./pages/Account";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./Components/Protected";
import "./App.css";
import Register from "./Components/Register";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/register"
            element={
              <Protected>
                {" "}
                <Register />{" "}
              </Protected>
            }
          />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
