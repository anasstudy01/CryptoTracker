import { useParams } from "react-router-dom";

function CoinDetailsPage(){

    const {coinid} = useParams();

return (
    <div>
        <h1>Coin Details Page</h1>
    
    {coinid}
    </div>
)


}
export default CoinDetailsPage;