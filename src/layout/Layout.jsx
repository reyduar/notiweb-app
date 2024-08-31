import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Sidebar, Footer } from "./";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Noticias from "../pages/Noticias";
import PerfilUsuario from "../pages/PerfilUsuario";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Routes>
        {/* Ruta para la página de Login */}
        <Route path="/login" element={<Login />} />
        {/* Ruta para la página de Registro */}
        <Route path="/registro" element={<Registro />} />
      </Routes>
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 p-8 bg-pastel-gray">
          <Routes>
            {/* Rutas protegidas con layout */}
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
