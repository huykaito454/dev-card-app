import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";

const HomePage = lazy(() => import("./pages/HomePage"));

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Route>
    </Routes>
  );
}
