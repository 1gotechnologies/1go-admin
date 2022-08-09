import { useEffect, useState } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Index = () => {
  const [title, setTitle] = useState("1go Admin Panel");
  const [auth, setAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    // setAuth(localStorage.getItem("x_key") ? true : false);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={auth ? <Home /> : <Navigate to={"login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Index;
