import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import lol from "../../../public/lol.jpg";

const Topbar = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUserName(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
      <h1 className="fs-4 fw-bold m-0">Minha Conta</h1>

      <div className="d-flex align-items-center gap-3">
        <button className="btn bg-transparent border-0 p-0 position-relative">
          <FaBell className="text-secondary fs-5" />
        </button>

        <div className="d-flex align-items-center">
          <span className="fw-medium me-4">{email || "Danilson Bengui"}</span>
          <img
            src={lol}
            className="rounded-circle me-4"
            alt={`Foto de perfil de ${email}`}
            width={40}
            height={40}
          />
          <button
            onClick={handleLogout}
            className="btn bg-transparent border-0 p-0 text-danger me-4"
            title="Sair"
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
