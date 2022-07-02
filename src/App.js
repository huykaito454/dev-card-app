import React, { Suspense } from "react";
import "swiper/scss";
import "swiper/css/pagination";
import AppRouter from "./AppRouter";
import Loading from "./components/Loading/Loading";
function App() {
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <AppRouter></AppRouter>
      </Suspense>
    </>
  );
}

export default App;
