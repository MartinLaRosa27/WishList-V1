import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AgregarDeseo } from "./AgregarDeseo.jsx";
import { Listado } from "./Listado.jsx";

export const NavBar = (props) => {
  const { logout } = useAuth0();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand font-italic">
            WishList
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/agregar-deseo" className="nav-link">
                  Agregar Deseo
                </NavLink>
              </li>
              <li className="nav-item">
                <p className="nav-link" href="/">
                  {props.user.name}
                </p>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => logout()}>
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Listado user={props.user.email} />}></Route>
        <Route
          path="/agregar-deseo"
          element={<AgregarDeseo user={props.user.email} />}
        ></Route>
        <Route
          path="*"
          element={<h1 className="mt-5 text-center">ERROR 404 :(</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
