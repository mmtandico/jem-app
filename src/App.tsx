import React, { useState, useEffect } from 'react';
import './App.css';

// Import your page components
import Login from './pages/Login';
import Main from './pages/Main';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

type PageType = 'main' | 'login' | 'services' | 'about';
type ThemeType = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('main');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState<ThemeType>('light');

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('mariao-theme') as ThemeType;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('mariao-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('main');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'main':
        return <Main />;
      case 'services':
        return <Services />;
      case 'about':
        return <AboutUs />;
      default:
        return <Main />;
    }
  };

  return (
    <div className={`app ${theme}`}>
      {/* Navigation Header */}
      <header className="app-header">
        <div className="nav-container">
          <div className="logo">
            <h1>Bayan ng Marilao</h1>
          </div>

          {isLoggedIn && (
            <nav className="nav-menu">
              <button
                className={`nav-button ${currentPage === 'main' ? 'active' : ''}`}
                onClick={() => setCurrentPage('main')}
              >
                Tahanan
              </button>
              <button
                className={`nav-button ${currentPage === 'services' ? 'active' : ''}`}
                onClick={() => setCurrentPage('services')}
              >
                Serbisyo
              </button>
              <button
                className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => setCurrentPage('about')}
              >
                Tungkol Sa Amin
              </button>
            </nav>
          )}

          <div className="auth-section">
            {/* Theme Toggle Button */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {isLoggedIn ? (
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="login-button"
                onClick={() => setCurrentPage('login')}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2024 Bayan ng Marilao, Bulacan. Lahat ng karapatan ay nakalaan.</p>
      </footer>
    </div>
  );
};

export default App;