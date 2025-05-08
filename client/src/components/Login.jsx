import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://musicapp-3n2d.onrender.com/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data.user);
    } catch {
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 bg-[#222] text-white"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 bg-[#222] text-white"
      />
      <button type="submit" className="bg-green-500 px-4 py-2 text-white">
        Login
      </button>
    </form>
  );
};

export default Login;
