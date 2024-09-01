import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import CrearUsuario from "./pages/CrearUsuario";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import PerfilUsuario from "./pages/PerfilUsuario";
import CrearNoticia from "./pages/CrearNoticia";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<CrearUsuario />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="crear-noticia" element={<CrearNoticia />} />
          <Route path="perfil" element={<PerfilUsuario />} />
        </Route>
      </Routes>
    </Router>
    ,
  </React.StrictMode>
);
