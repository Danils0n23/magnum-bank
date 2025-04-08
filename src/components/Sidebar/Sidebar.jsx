import React, { useEffect, useState } from "react";
import { FaChartLine, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../public/magnum.png";
import lol from "../../../public/lol.jpg";

const basePath = "/dashboard";

const mainNavItems = [
  { icon: <FaHome />, label: "Dashboard", path: `${basePath}` },
  {
    icon: <FaChartLine />,
    label: "Transactions",
    path: `${basePath}/transactions`,
  },
];

const Sidebar = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <aside className="sidebar bg-white border-end p-4 vh-100 d-flex flex-column">
      <div className="sidebar-header mb-4 text-center">
        <img
          src={Logo}
          alt="Magnum Bank Logo"
          className="img-fluid mb-2"
          style={{ maxWidth: "120px" }}
        />
        <h5 className="fw-bold m-0">Magnum Bank</h5>
      </div>

      <nav className="flex-grow-1">
        <ul className="nav flex-column">
          {mainNavItems.map((item, index) => (
            <li key={index} className="nav-item mb-4">
              <Link
                to={item.path}
                className="d-flex align-items-center text-decoration-none text-dark"
              >
                <span className="me-2">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" d-flex align-items-center">
        <span className="fw-medium me-4">{email || "Danilson Bengui"}</span>
        <img
          src={lol}
          className="rounded-circle "
          alt={`Foto de perfil de ${email || "Danilson Bengui"}`}
          width={40}
          height={40}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
