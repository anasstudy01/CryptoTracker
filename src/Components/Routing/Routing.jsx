import { Route,Routes } from "react-router-dom";
import Home from "../../Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";

function Routing() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/details/:coinid" element={<CoinDetailsPage />} />
          </Routes>
    </>
  );
}

export default Routing;
