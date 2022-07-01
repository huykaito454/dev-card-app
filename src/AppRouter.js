import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const CardGenerate = lazy(() => import('./pages/CardGenerate/CardGenerate'));
const ForgotPassword = lazy(() =>
  import('./pages/ForgotPassword/ForgotPassword')
);
const SignUp = lazy(() => import('./components/SignUp/SignUp'));

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main></Main>}>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route
          path='/card-generate'
          element={<CardGenerate></CardGenerate>}></Route>
        <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route>
        <Route
          path='/forgot-password'
          element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Route>
    </Routes>
  );
}
