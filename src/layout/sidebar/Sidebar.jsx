import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNewspaper } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 shadow-lg">
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              to="/"
              className="block py-2 px-4 rounded hover:bg-gray-600 transition flex items-center"
            >
              <FaHome className="mr-2" /> Inicio
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/noticias"
              className="block py-2 px-4 rounded hover:bg-gray-600 transition flex items-center"
            >
              <FaNewspaper className="mr-2" /> Noticias
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
