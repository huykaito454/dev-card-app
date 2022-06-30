import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import CardGenerate from './pages/CardGenerate/CardGenerate';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main></Main>}>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route
          path='/cardGenerate'
          element={<CardGenerate></CardGenerate>}></Route>
      </Route>
    </Routes>
  );
}
