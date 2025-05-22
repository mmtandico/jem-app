// Login.tsx
import React, { useState } from "react";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in real app, you'd validate against a backend
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="page-container fade-in">
      <div className="card" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2 className="page-title">Welcome Back</h2>
        <p className="page-subtitle">Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
