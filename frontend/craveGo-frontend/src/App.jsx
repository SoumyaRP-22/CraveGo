import { useState } from "react";

import Landing from "./pages/Landing";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTP from "./pages/OTP";

function App() {
  const [page, setPage] = useState("landing");

  // INTRO
  if (page === "landing") {
    return (
      <Landing
        onExplore={() => setPage("welcome")}
      />
    );
  }

  // WELCOME
  if (page === "welcome") {
    return (
      <Welcome
        onLogin={() => setPage("login")}
        onRegister={() => setPage("register")}
      />
    );
  }

  // LOGIN
  if (page === "login") {
    return (
      <Login
        onBack={() => setPage("welcome")}
        onRegister={() => setPage("register")}
        onLoginSuccess={() => setPage("otp")}
      />
    );
  }

  // REGISTER
  if (page === "register") {
    return (
      <Register
        onBack={() => setPage("welcome")}
        onLogin={() => setPage("login")}
        onRegisterSuccess={() => setPage("otp")}
      />
    );
  }

  // OTP
  if (page === "otp") {
    return (
      <OTP
        onBack={() => setPage("welcome")}
        onVerify={() => setPage("home")}
      />
    );
  }

  // TEMPORARY HOME
  if (page === "home") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff5f8",
          fontFamily: "Arial",
        }}
      >
        <h1>
          Welcome to{" "}
          <span style={{ color: "#ff3f78" }}>
            CraveGo
          </span>
        </h1>
      </div>
    );
  }

  return null;
}

export default App;