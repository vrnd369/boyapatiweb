import React, { useState } from "react";
import "../styles/globals.css";

const AuthModal = ({ isOpen, onClose, type, onSwitchType }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{type === "login" ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {type === "register" && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="btn-primary">
            {type === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className="auth-switch">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button className="btn-text" onClick={onSwitchType}>
            {type === "login" ? "Register" : "Login"}
          </button>
        </p>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          width: 100%;
          max-width: 400px;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .form-group input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .btn-primary {
          width: 100%;
          padding: 0.75rem;
          background: #e19898;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 1rem;
        }

        .btn-primary:hover {
          background: #d88a8a;
        }

        .auth-switch {
          margin-top: 1rem;
          text-align: center;
          color: #666;
        }

        .auth-switch .btn-text {
          color: #e19898;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }

        .auth-switch .btn-text:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
