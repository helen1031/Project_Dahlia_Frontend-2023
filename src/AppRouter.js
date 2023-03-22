import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import App from "./App";
import FlowerPostCreate from "./FlowerPostCreate";
import FlowerPostDetail from "./FlowerPostDetail";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialLogin from "./SocialLogin";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"signup"} element={<SignUp />} />
        <Route path={"sociallogin"} element={<SocialLogin />} />
        <Route path={"flower-post/create"} element={<FlowerPostCreate />} />
        <Route path={"flower-post/detail"} element={<FlowerPostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
