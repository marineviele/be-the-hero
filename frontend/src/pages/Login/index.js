import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post("sessions", { id });

      // make it available to all your app
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", res.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Falha no Login, tente novamente.");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça o seu login</h1>

          <input
            placeholder="Insira o seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02042" />
            Não tenho registo
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
