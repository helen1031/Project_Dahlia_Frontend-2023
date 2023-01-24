import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import App from "./App";
import PostCreate from "./PostCreate";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"signup"} element={<SignUp />} />
        <Route path={"post/create"} element={<PostCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
