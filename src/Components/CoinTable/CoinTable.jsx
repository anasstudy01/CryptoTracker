import { useState,useContext } from "react";
import { fetchCoinData } from "../../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

import globalscope from "../../GlobalContext/context";
import { useNavigate } from "react-router-dom";

function CoinTable() {
  const [page, setPage] = useState(1);
 const {currency}=useContext(globalscope);
 const navigate = useNavigate();
  // const [data, setData] = useState([]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["coinData", page,currency], // dependency array if any of the value changes the query will be re-executed
    queryFn: () => fetchCoinData(page, currency), // function that will be executed
    retry: 2, //  additional options for the query function  basically keyword defined in the react-query
    retryDelay: 1000,
    cachedTime: 1000 * 60 * 2,
  });

 const handleCoinredirect=(id)=>{
    navigate(`/details/${id}`);
  }


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <>
      <div className="heading  bg-blue-500 my-4 mx-10 flex justify-center  text-2xl font-bold px-20 py-2 rounded-lg text-white">
        <div className="w-1/4 h-full">CoinName</div>

        <div className="w-1/4 h-full">Current Price  ({currency.toUpperCase()})</div>
        <div className="w-1/4 h-full ml-25">Market Cap</div>
        <div className="w-1/4 h-full">24Hchange</div>
      </div>

      <div>
        <div>
          {data &&
            data.map((coin) => {
              return (
                <div
                  className="flex justify-center items-center bg-amber-50 text-black border-1 mx-10 p-2"
                  key={coin.id}
                  onClick={() => {
                  handleCoinredirect(coin.id);
                  }}
                >
                  <div className="ml-10 ">
                    <img src={coin.image} width="80px" ></img>
                  </div>

                  <div className="w-1/4 h-full font-semibold mx-5">
                    <div>{coin.name}</div>
                    <div>{coin.symbol}</div>
                  </div>
                  <div className="w-1/4 h-full">{coin.current_price}</div>
                  <div className="w-1/4 h-full">{coin.market_cap}</div>
                  <div className="w-1/4 h-full">
                    {coin.price_change_percentage_24h}
                  </div>
                  
                </div>
              );
            })}
        </div>
      </div>

      <div className=" buttons flex  justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 w-30 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 w-30 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
        

      </div>
    </>
  );
}
export default CoinTable;
