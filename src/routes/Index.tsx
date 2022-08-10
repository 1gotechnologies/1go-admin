import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Account from "../pages/Account";
import Approved from "../pages/Approved";
import Declined from "../pages/Declined";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Paid from "../pages/Paid";
import Pending from "../pages/Pending";
import PendingDetails from "../pages/PendingDetails";
import Register from "../pages/Register";
import SummaryPage from "../pages/SummaryPage";

const Index = () => {
  const [title, setTitle] = useState("1go Admin Panel");
  const [auth, setAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // setAuth(localStorage.getItem("x_key") ? true : false);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={auth ? <Home /> : <Navigate to={"login"} />} />
      <Route
        path="/pending"
        element={
          auth ? <SummaryPage type="pending" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/pending/:agency"
        element={
          auth ? <SummaryPage type="pending" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/account"
        element={auth ? <Account /> : <Navigate to={"login"} />}
      />
      <Route
        path="/account/:agency"
        element={
          auth ? <SummaryPage type="pending" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/approved"
        element={
          auth ? <SummaryPage type="approved" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/approved/:agency"
        element={
          auth ? <SummaryPage type="pending" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/declined"
        element={
          auth ? <SummaryPage type="declined" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/declined/:agency"
        element={
          auth ? <SummaryPage type="pending" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/paid"
        element={auth ? <SummaryPage type="paid" /> : <Navigate to={"login"} />}
      />
      <Route
        path="/paid/:agency"
        element={
          auth ? <SummaryPage type="pending" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/details"
        element={auth ? <Details /> : <Navigate to={"login"} />}
      />
      <Route
        path="/pending-details"
        element={auth ? <PendingDetails /> : <Navigate to={"login"} />}
      />
      <Route
        path="/login"
        element={/*!auth ?*/ <Login /> /* : <Navigate to={"/"} />*/}
      />
      <Route
        path="/register"
        element={/*!auth ?*/ <Register /> /* : <Navigate to={"/"} />*/}
      />
    </Routes>
  );
};

export default Index;
