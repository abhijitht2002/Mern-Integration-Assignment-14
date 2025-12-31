import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getToken } from "./api/api-helper";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
