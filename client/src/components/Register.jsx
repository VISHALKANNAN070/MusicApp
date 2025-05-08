import React, { useState } from "react";
import axios from "axios";

const Register = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://musicapp-3n2d.onrender.com/api/auth/register",
        { name, email, password },
        { withCredentials: true }
      );
      setUser(res.data.user);
    } catch {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-6 space-y-4 max-w-sm mx-auto text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 bg-[#222] border border-[#333] rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 bg-[#222] border border-[#333] rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 bg-[#222] border border-[#333] rounded"
      />
      <button type="submit" className="bg-green-500 w-full py-2 rounded hover:bg-green-400 transition">
        Register
      </button>
    </form>
  );
};

export default Register;
