import React, { useState } from "react";
import "./App.css";

function GuestPage() {
  return (
    <div>
      <h2>Please sign up.</h2>
      <h3>Flight Details</h3>
      <p>Flight: AI-202</p>
      <p>From: Delhi</p>
      <p>To: Mumbai</p>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome back</h2>
      <h3>You can now book your tickets.</h3>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? <UserPage /> : <GuestPage />}

      <br />

      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;