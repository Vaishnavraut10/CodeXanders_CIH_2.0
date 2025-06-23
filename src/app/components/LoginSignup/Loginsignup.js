"use client";
import React, { useState } from "react";
import "./Loginsignup.css";

export default function SliderAuth({ onClose }) {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="slider-popup-overlay">
      <div className={`slider-container ${isSignIn ? "" : "slide-mode"}`}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="left-panel">
          <div className="text-content">
            <h2>{isSignIn ? "New here?" : "Welcome back!"}</h2>
            <p>
              {isSignIn
                ? "Sign up and track your brain!"
                : "If you already have an account, just sign in."}
            </p>
            <button onClick={handleToggle}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>

        <div className="right-panel">
          <div className="form-box">
            <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
            <form>
              {!isSignIn && <input type="text" placeholder="Username" />}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <p className="lost_pass">
                {isSignIn && (
                  <>
                    Forgot Password?{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Click here
                    </span>
                  </>
                )}
              </p>
              <button type="submit">{isSignIn ? "Login" : "Register"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}