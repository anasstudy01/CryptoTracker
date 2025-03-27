import { Route, Routes } from "react-router-dom";
// import Home from "../../Home";
// import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
              <Suspense fallback={
                  <div><h1>New Content is on the way...</h1></div> }>
                <Home />
              </Suspense>
            }
          />
          <Route    path="/details/:coinid" element={
              <Suspense fallback={
                  <div>    <h1>New Content is on the way keep waiting...</h1> </div>  }>
                <CoinDetailsPage />
                 </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
