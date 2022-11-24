import { UserAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

const Account = () => {
  const { logout, user } = UserAuth();

  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const register = () => {
    return navigate("/register");
  };

  return (
    <div>
      <h1>Account Page</h1>
      <div>
        <p>Welcome,{user?.displayName}</p>
        <button onClick={register}>Register</button>
      </div>
      <button onClick={handleSignout}>Logout</button>
    </div>
  );
};

export default Account;
