import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../../services/fetchCoinDetails";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import globalscope from "../GlobalContext/context";
import CoinInfo from "./CoinInfo";


function CoinDetailsPage() {
  const { coinid } = useParams();
  const { currency } = useContext(globalscope);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coinDetails", coinid],
    queryFn: () => fetchCoinDetails(coinid),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error:{error.message}</div>;
  console.log(data);

  return (
    <>
      <div className=" background  w-full h-screen  flex pt-8 bg-white">
        <div className="leftbar border-e-2 border-gray-400 h-full">
          <div className="w-65  h-60 flex flex-col justify-start items-center border-gray-300 border-2  shadow-2xl hover:transition-all hover:scale-101 rounded-2xl mx-5 ">
            <div className=" w-25 h-25 mt-5 mx-8">
              <img
                src={data.image.large}
                alt={data.name}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold  mt-5 mx-8 text-gray-800">
              {data.name} ({data.symbol.toUpperCase()})
            </h2>
          </div>
          <div className="w-75 h-full">
            <div className="  h-110 my-5 border-gray-300 border-2 p-2 shadow-2xl hover:transition-all hover:scale-101 rounded-2xl mx-5 overflow-x-wrap overflow-y-scroll  ">
              <h2 className="text-4xl font-bold my-5  text-gray-800">
                Description
              </h2>
              <p className=" font-semibold  text-gray-600 ">
                Current Currency : {currency.toUpperCase()}{" "}
                {data.market_data.current_price[currency]}
              </p>
              <p className=" font-semibold  text-gray-400 ">
                {data.description.en}
              </p>
            </div>
          </div>
        </div>

        <div className="rightbar">
          <div className=" w-300 h-1/2   border-gray-300 border-2  shadow-2xl hover:transition-all hover:scale-101 rounded-2xl mx-10 ">
         <CoinInfo/>


          </div>
          <h1 className="text-3xl text-center text-gray-800 font-semibold">
            Graphical Representation
          </h1>
        </div>
      </div>
    </>
  );
}
export default CoinDetailsPage;
