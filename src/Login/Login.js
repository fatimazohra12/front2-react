import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Mot de passe:", password);
    navigate("/room");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <p>Entrez vos identifiants pour vous connecter</p>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="exemple@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Se connecter
        </button>
        <p className="forgot-password">
          <a href="/forgot-password">Mot de passe oublié ?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
