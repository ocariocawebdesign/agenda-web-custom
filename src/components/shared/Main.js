import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Password from "../pages/Password";

import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />

      <Route path="/cadastrar-usuario" exact element={<Register />} />

      <Route path="/recuperar-senha" exact element={<Password />} />
    </Routes>
  );
}
