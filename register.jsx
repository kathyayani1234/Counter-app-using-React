import React, { useState } from "react";

function Register({ onRegister, onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError(""); // Clear error
    onRegister({ username, password });
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-body">
          <h1>Register</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleRegister}>
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
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control mb-3"
                required
              />
              <button className="btn btn-success" type="submit">
                Register
              </button>
              <p className="mt-3">
                Already have an account?{" "}
                <button className="btn btn-link p-0" onClick={onSwitchToLogin}>
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
