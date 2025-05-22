import React, { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

type PageType = "main" | "login" | "services" | "about";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("main");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("main");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("login");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onLogin={handleLogin} />;
      case "main":
        return <Main />;
      case "services":
        return <Services />;
      case "about":
        return <AboutUs />;
      default:
        return <Main />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="nav-container">
          <div className="logo">
            <h1>Bayan ng Marilao</h1>
          </div>

          {isLoggedIn && (
            <nav className="nav-menu">
              <button
                className={`nav-button ${
                  currentPage === "main" ? "active" : ""
                }`}
                onClick={() => setCurrentPage("main")}
              >
                Tahanan
              </button>
              <button
                className={`nav-button ${
                  currentPage === "services" ? "active" : ""
                }`}
                onClick={() => setCurrentPage("services")}
              >
                Serbisyo
              </button>
              <button
                className={`nav-button ${
                  currentPage === "about" ? "active" : ""
                }`}
                onClick={() => setCurrentPage("about")}
              >
                Tungkol Sa Amin
              </button>
            </nav>
          )}

          <div className="auth-section">
            {isLoggedIn ? (
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="login-button"
                onClick={() => setCurrentPage("login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="app-main">{renderPage()}</main>

      <footer className="app-footer">
        <p>
          &copy; 2024 Bayan ng Marilao, Bulacan. Lahat ng karapatan ay nakalaan.
        </p>
      </footer>
    </div>
  );
};

export default App;
