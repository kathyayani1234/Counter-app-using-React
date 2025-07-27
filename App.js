import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(0);

  const handleLogin = (username, password) => {
    if (userData && username === userData.username && password === userData.password) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleRegister = (data) => {
    setUserData(data); // save registered data
    setShowRegister(false); // go to login screen
    alert("Registration successful! You can now login.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCount(0);
  };

  if (!isLoggedIn) {
    if (showRegister) {
      return (
        <Register
          onRegister={handleRegister}
          onSwitchToLogin={() => setShowRegister(false)}
        />
      );
    }

    return (
      <Login
        onLogin={handleLogin}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2>{count}</h2>
            <button className="btn btn-success mx-2" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-danger mx-2" onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
            <button className="btn btn-secondary mx-2" onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
          </div>
          <button className="btn btn-outline-dark mt-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
