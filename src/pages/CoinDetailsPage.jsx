import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../../services/fetchCoinDetails";
import { useQuery } from "@tanstack/react-query";

function CoinDetailsPage(){

    const {coinid} = useParams();

    const{data,isLoading, isError,error}=useQuery({
        queryKey:["coinDetails",coinid],
        queryFn:()=>fetchCoinDetails(coinid),
        retry:2,
        retryDelay:1000,
        cacheTime:1000*60*2,
    });

    if(isLoading) return <div>Loading...</div>;
    if(isError) return <div>Error:{error.message}</div>;
    console.log(data);


return (<>

    <div>
        <h1>Coin Details Page</h1>    
    {coinid}    
    </div>

    <div>
        <img src={data.image.small} alt={data.name} />
        <div>{data.name}</div>
        <div>{data.symbol}</div>
        <div>{data.market_data.current_price.usd}</div>
        <div>{data.market_data.market_cap.usd}</div>
        <div>{data.market_data.price_change_percentage_24h}</div>
        <div>{data.market_data.price_change_percentage_7d}</div>
        <div>{data.market_data.price_change_percentage_30d}</div>
        <div>{data.market_data.price_change_percentage_200d}</div>
        <div>{data.market_data.price_change_percentage_1y}</div>
    </div>
</>
);}
export default CoinDetailsPage;