import React, { Suspense } from "react";
import "swiper/scss";
import "swiper/css/pagination";
import AppRouter from "./AppRouter";
function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <AppRouter></AppRouter>
      </Suspense>
    </>
  );
}

export default App;
