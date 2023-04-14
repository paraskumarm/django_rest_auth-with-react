import React from "react";
import { Link } from "react-router-dom";

export const Default = () => {
  return (
    <>
    WELCOME
      <div>
        <Link to="/login">LOGIN</Link>
      </div>
      <div>
        <Link to="/signin">SIGNIN</Link>
      </div>
    </>
  );
};
