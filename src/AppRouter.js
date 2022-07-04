import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./layout/Main";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const CardGenerate = lazy(() =>
  import("./pages/CardGeneratePage/CardGeneratePage")
);
const ForgotPassword = lazy(() =>
  import("./pages/ForgotPassword/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./pages/ForgotPassword/ResetPassword")
);
const SignUp = lazy(() => import("./pages/Authentication/SignUpPage"));
const SignIn = lazy(() => import("./pages/Authentication/SignInPage"));
const ConfirmOTP = lazy(() => import("./pages/ForgotPassword/ConfirmOTP"));
const ConfirmSuccess = lazy(() =>
  import("./pages/ForgotPassword/ConfirmSuccess")
);

export default function AppRouter() {
  const token = localStorage.getItem("userToken");
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/card-generate"
          element={
            token !== null ? (
              <CardGenerate></CardGenerate>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        ></Route>
        <Route
          path="/profile"
          element={
            token !== null ? (
              <ProfilePage></ProfilePage>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route path="/confirm-otp" element={<ConfirmOTP></ConfirmOTP>}></Route>
        <Route
          path="/sign-up"
          element={token === null ? <SignUp></SignUp> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/sign-in"
          element={token === null ? <SignIn></SignIn> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/confirmed-success"
          element={<ConfirmSuccess></ConfirmSuccess>}
        ></Route>
        <Route
          path="/reset-password"
          element={<ResetPassword></ResetPassword>}
        ></Route>
      </Route>
    </Routes>
  );
}
