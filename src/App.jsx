import { useState, useEffect } from "react";
import { getToken } from "./modules/token";
import { Navigate } from "react-router-dom";

import "./App.css";

function App() {
  if (!getToken()) {
    console.log("%c Not logged in! navigating to /login","color:yellow; font-weight:bold; font-size:20px")
    Navigate({ to: "/login" })
  }


  return (
    <>
    </>
  );
}

export default App;
