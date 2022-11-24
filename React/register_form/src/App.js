import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Router>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
