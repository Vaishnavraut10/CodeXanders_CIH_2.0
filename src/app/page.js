"use client";
  import React, { useState, useEffect } from "react";
import Home from './components/Home/Home'
import Loginsignup from "./components/LoginSignup/Loginsignup";
const page = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeLogin = () => setShowLogin(false);
  return (
    <div>
      <Home />
       {showLogin && <Loginsignup onClose={closeLogin} />}
    </div>
  )
}

export default page;
