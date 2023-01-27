import React from "react";
import { Route, Routes } from "react-router-dom";
import AddHotel from "../pages/Admin/addHotel";
import Home from "../pages/Admin/AdminHome";
import Login from "../pages/Admin/Login";
import Register from "../pages/Register";
import UserManage from "../pages/Admin/UserManage";
import Navbar from "../components/admin/navbar";
import PublicRoute from "../components/admin/PublicRoute";
import ProtectedRoute from "../components/admin/ProtectedRoute";

export default function Admin() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/addHotel"element={
            <ProtectedRoute>
              <AddHotel />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/login"element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/User"element={
            <ProtectedRoute>
              <UserManage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
