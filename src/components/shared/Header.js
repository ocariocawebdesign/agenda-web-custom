import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" to="/">
                  Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/cadastrar-usuario">
                  Cadastre seu usuário
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/recuperar-senha">
                  Recuperar senha
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

/*{[
          ["Home", "/"],
          ["Login", "/login"],
          ["Cadastre um produto", "/cadastrar-produto"],
          ["Recuperar senha", "/recuperar-senha"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}*/
