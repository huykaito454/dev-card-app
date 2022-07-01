import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import ResetPassword from './pages/ForgotPassword/ResetPassword';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const CardGenerate = lazy(() => import('./pages/CardGenerate/CardGenerate'));
const ForgotPassword = lazy(() =>
  import('./pages/ForgotPassword/ForgotPassword')
);
const SignUp = lazy(() => import('./components/Authentication/SignUp'));
const SignIn = lazy(() => import('./components/Authentication/SignIn'));
const ConfirmOTP = lazy(() => import('./pages/ForgotPassword/ConfirmOTP'));
const ConfirmSuccess = lazy(() =>
  import('./pages/ForgotPassword/ConfirmSuccess')
);

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
          path='/forgot-password/confirm-OTP'
          element={<ConfirmOTP></ConfirmOTP>}></Route>
        <Route
          path='/confirmed-success'
          element={<ConfirmSuccess></ConfirmSuccess>}></Route>
        <Route
          path='/reset-password'
          element={<ResetPassword></ResetPassword>}></Route>
      </Route>
    </Routes>
  );
}
