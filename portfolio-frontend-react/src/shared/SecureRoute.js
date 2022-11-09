import React, { useState } from "react";
import { Navigate, Route } from "react-router-dom";
import isLogin from "./authorization";

const SecureRoute = (props) => {
  const [isLogged] = useState(isLogin);
  return (
    <Route
      path={props.path}
      render={(data) =>
        isLogged ? (
          <props.component {...data}></props.component>
        ) : (
          <Navigate
            to={{ pathname: "/", state: { from: props.location } }}
          ></Navigate>
        )
      }
    ></Route>
  );
};

export default SecureRoute;