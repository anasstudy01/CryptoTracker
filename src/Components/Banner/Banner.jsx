import globalscope from "../../GlobalContext/context";
import cover from "../Banner/Banner1.jpeg";
import { useContext } from "react";

function Banner() {
  const {  setCurrency } = useContext(globalscope);

  return (
    <>
      <div className="banner w-full bg-white h-90">
        <img src={cover} alt="cover" className="w-full  h-full " />
        <div className="banner-text text-center text-white absolute top-50 left-40">
          <h1 className="text-4xl font-bold">Welcome to CoinMarket</h1>
          <p className="text-lg">Get the latest updates on cryptocurrency</p>
         <div >

        
            <button
              className="bg-blue-500 hover:bg-blue-700 w-30 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
              onClick={() => {
                setCurrency("usd");
              }} // set currency to usd
            >
              USD
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 w-30 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
              onClick={() => {
                setCurrency("inr");
              }}
            >
              INR
            </button>

         </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
