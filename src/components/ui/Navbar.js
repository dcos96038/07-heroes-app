import React, {useContext} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";

import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

export const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");
    const logoutAction = {
      type: types.logout,
    };

    dispatch(logoutAction);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ms-4" to="/">
        Hero App
      </Link>

      <div className="navbar-collapse animate__animated animate__pulse">
        <div className="navbar-nav">
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/search">
            Busqueda
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto me-3">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <span className="nav-item nav-link" style={{cursor: "pointer"}} onClick={handleLogout}>
            Logout
          </span>
        </ul>
      </div>
    </nav>
  );
};
