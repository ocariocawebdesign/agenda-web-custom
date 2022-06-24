import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Cadastro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-
            toggle="collapse"
            data-bs-
            target="#navbarSupportedContent"
            aria-
            controls="navbarSupportedContent"
            aria-
            expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cadastrar-produto">
                  Cadastre seu produto
                </NavLink>
              </li>

              <li className="nav-item">
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
