import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const {setUser}=useContext(UserContext)
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({username})
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="please enter"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="please enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Login;
