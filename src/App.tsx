import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { HomePage } from "./pages/HomePage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";

import { authStore } from "./store/authStore";

export const App = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {

    authStore.createSession();

    if(authStore.isAuth) {
      navigate('/');
    }
  }, [authStore.isAuth])

  return (
    authStore.isAuth ?
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:boardID/:boardName" element={<BoardPage />} />
      </Routes>
      :
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
  )
})