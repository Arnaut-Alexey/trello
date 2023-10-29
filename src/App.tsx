import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";

export const App = () => {
  const isAuth = true;

  return (
    isAuth ?
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
}