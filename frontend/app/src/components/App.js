import React from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "./Signup";
import { Default } from "./Default";
import Login from "./Login";

export const App = () => {
  return (
    <Routes>
      <Route exact path="/login" Component={Login} />
      <Route exact path="/signin" Component={Signin} />
      <Route path="/" Component={Default} />
    </Routes>
  );
};
