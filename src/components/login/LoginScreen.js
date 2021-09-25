import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    const loginAction = {
      type: types.login,
      payload: {
        name: "Diego",
      },
    };
    dispatch(loginAction);

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
