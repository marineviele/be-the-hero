import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  useEffect(() => {
    api.get("profile", {
        headers: {
          Authorization: ongId
        }
    }).then(res => {
        setIncidents(res.data);
    });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      /* you can remove from incidents list or call de api get all again */
      setIncidents(incidents.filter(el => el.id !== id));
      
    } catch (err) {
      alert("Erro ao apagar o incidente, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  function createIncidentList() {
    return incidents.map(el => {
      return (
        <li key={el.id}>
          <strong>CASO:</strong>
          <p>{el.title}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{el.description}</p>

          <strong>VALOR:</strong>
          <p>
            {Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR"
            }).format(el.value)}
          </p>

          <button onClick={() => handleDeleteIncident(el.id)} type="button">
            <FiTrash2 size={20} color="A8A8B3" />
          </button>
        </li>
      );
    });
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Registar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02042" />
        </button>
      </header>

      <h1>Casos registados</h1>

      <ul>{createIncidentList()}</ul>
    </div>
  );
}