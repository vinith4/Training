import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();

  const handleSignout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <table className="navbartable">
        <tr>
          <td>
            {" "}
            <p>
              <b>Vinith Technologies</b>
            </p>
          </td>
          {user?.displayName ? (
            <div>
              <table>
                <tr>
                  <td className="thstyle">
                    <p classname="pstyle">
                      <br></br>
                      <b>{user?.displayName}</b>{" "}
                    </p>
                  </td>
                  <td>
                    <img src={user?.photoURL} />
                    <br></br>
                  </td>
                  <br></br>
                  <td>
                    <button onClick={handleSignout}>Logout</button>
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            <Link to="/signin">Signin</Link>
          )}
        </tr>
      </table>
    </div>
  );
};

export default Navbar;
