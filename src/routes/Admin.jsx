import React from "react";
import { Route, Routes } from "react-router-dom";
import AddHotel from "../pages/Admin/AddHotel";
import Home from "../pages/Admin/AdminHome";
import Login from "../pages/Admin/Login";
// import Register from "../pages/Register";
import UserManage from "../pages/Admin/UserManage";
import Navbar from "../components/admin/navbar";
import PublicRoute from "../components/admin/PublicRoute";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import ViewHotel from "../pages/Admin/ViewHotel";
import EditHotel from "../pages/Admin/EditHotel"
import AddRoom from "../pages/Admin/AddRoom";
import ViewRoom from "../pages/Admin/ViewRoom"
import EditRoom from "../pages/Admin/EditRoom"
import BookingManage from "../pages/Admin/BookingManage";
import BookDetails from "../pages/Admin/BookDetails";


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
          path="/login"element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/user"element={
            <ProtectedRoute>
              <UserManage />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/booking"element={
            <ProtectedRoute>
              <BookingManage />
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
            path="/bookedRoom"element={
              <ProtectedRoute>
                <BookDetails />
              </ProtectedRoute>
            }
          />
        <Route
          exact
          path="/hotels"element={
            <ProtectedRoute>
              <ViewHotel />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/editHotel"element={
            <ProtectedRoute>
              <EditHotel />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/addRoom"element={
            <ProtectedRoute>
              <AddRoom />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/rooms"element={
            <ProtectedRoute>
              <ViewRoom />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/editRoom"element={
            <ProtectedRoute>
              <EditRoom />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<div>
        <h1>Page Not Found 404</h1>
       </div>}/>
    
      </Routes>
    </>
  );
}
