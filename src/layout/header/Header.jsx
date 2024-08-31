import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArtstation, FaUserCircle } from "react-icons/fa";

export const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Aquí puedes limpiar la sesión del usuario, eliminar tokens, etc.
    // Por ejemplo, puedes usar localStorage.clear() si guardaste datos allí.
    localStorage.clear(); // Limpia el almacenamiento local

    // Navegar a la página de login
    navigate("/login");
  };

  return (
    <header className="bg-[#007ACC] text-white p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <FaArtstation className="text-3xl mr-4" />
        <h1 className="text-3xl font-semibold">Portal de Noticias</h1>
      </div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-white focus:outline-none"
        >
          <FaUserCircle className="text-2xl" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
            <ul>
              <li>
                <Link
                  to="/perfil"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Perfil de Usuario
                </Link>
              </li>
              <li>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
