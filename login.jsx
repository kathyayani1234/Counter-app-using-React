import React, { useState } from "react";

function Login({ onLogin, onSwitchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    setError(""); // Clear any existing error
    onLogin(username, password); // Pass credentials to App.js
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-body">
          <h1>Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control mb-3"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
                required
              />
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <p className="mt-3">
                Don't have an account?{" "}
                <button className="btn btn-link p-0" onClick={onSwitchToRegister}>
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
