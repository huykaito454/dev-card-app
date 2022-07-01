import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const CardGenerate = lazy(() => import('./pages/CardGenerate/CardGenerate'));
const ForgotPassword = lazy(() =>
  import('./pages/ForgotPassword/ForgotPassword')
);
const SignUp = lazy(() => import('./components/Authentication/SignUp'));
const SignIn = lazy(() => import('./components/Authentication/SignIn'));
const ConfirmOTP = lazy(() => import('./pages/ForgotPassword/ConfirmOTP'));

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
        <Route
          path='/forgot-password/confirmOTP'
          element={<ConfirmOTP></ConfirmOTP>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
}
