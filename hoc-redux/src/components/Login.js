import React, { useState } from "react";

const Login = ({ user, login }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userInfo.username, userInfo.password);
  };
  return (
    <form onChange={handleOnChange} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Username</label>
        <input type="text" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input type="text" name="password" />
      </div>
      <button>Login</button>
    </form>
  );
};

export default Login;
