import React, { useState } from "react";
import axios from "axios";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/create-account", {
        name,
        email,
        password,
        role,
      });
      alert("Account Created!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Account Creation Failed!");
    }
  };

  return (
    <div className="create-account">
      <h2>Create Account</h2>
      <form onSubmit={handleCreateAccount}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="city_manager">City Manager</option>
          <option value="branch_manager">Branch Manager</option>
          <option value="donor">Donor</option>
        </select>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
