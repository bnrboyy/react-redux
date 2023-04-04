import React from "react";
import { login, logout } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const User2 = () => {
  const store = useSelector((state) => ({ ...state })); // Selector All Stores
  const member = useSelector((state) => state.member.value); // Selector value of Member store
  const dispatch = useDispatch();

  const user = {
    username: "Nantachai",
    password: "231231232",
  };

  const handleLogin = () => {
    dispatch(login(user));
  };

  return (
    <div>
      <h1>This is User2 component</h1>
      <br />
      <p>{store.member.value}</p>

      <button onClick={handleLogin}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default User2;
