import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Account from "../pages/Account";
import Approved from "../pages/Approved";
import Declined from "../pages/Declined";
import ListPage from "../pages/ListPage";
import DetailsPage from "../pages/DetailsPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Paid from "../pages/Paid";
import Pending from "../pages/Pending";
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
      <Route
        path="/"
        // exact={true}
        element={auth ? <Home /> : <Navigate to={"login"} />}
      />
      <Route
        path="/pending"
        // exact={true}
        element={
          auth ? <SummaryPage type="pending" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/pending/:agency"
        element={auth ? <ListPage type="pending" /> : <Navigate to={"login"} />}
      />
      <Route
        path="/account"
        // exact={true}
        element={auth ? <Account /> : <Navigate to={"login"} />}
      />
      {/* <Route
        path="/account/:agency"
        element={auth ? <ListPage type="account" /> : <Navigate to={"login"} />}
      /> */}
      <Route
        path="/approved"
        // exact={true}
        element={
          auth ? <SummaryPage type="approved" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/approved/:agency"
        element={
          auth ? <ListPage type="approved" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/declined"
        // exact={true}
        element={
          auth ? <SummaryPage type="declined" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/declined/:agency"
        element={
          auth ? <ListPage type="declined" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/paid"
        // exact={true}
        element={auth ? <SummaryPage type="paid" /> : <Navigate to={"login"} />}
      />
      <Route
        path="/paid/:agency"
        element={auth ? <ListPage type="paid" /> : <Navigate to={"login"} />}
      />
      <Route
        path="/:type/details/:id"
        // exact={true}
        element={auth ? <DetailsPage /> : <Navigate to={"login"} />}
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
