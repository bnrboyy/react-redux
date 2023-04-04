import React from "react";
import { useSelector } from "react-redux";

function User() {
  const { user } = useSelector((state) => ({...state}));
  
  return (
    <div>
      <h1>This is User Component</h1>
      <p>{user.value}</p>
      <br />
      {user.loading ? <p>Loading....</p> : <p>Please Login</p>}
    </div>
  );
}

export default User;
