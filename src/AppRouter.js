import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const CardGenerate = lazy(() => import("./pages/CardGenerate/CardGenerate"));

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/cardGenerate"
          element={<CardGenerate></CardGenerate>}
        ></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
      </Route>
    </Routes>
  );
}
