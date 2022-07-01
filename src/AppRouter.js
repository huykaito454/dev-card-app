import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
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
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/card-generate"
          element={<CardGenerate></CardGenerate>}
        ></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route path="/confirmOTP" element={<ConfirmOTP></ConfirmOTP>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
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
