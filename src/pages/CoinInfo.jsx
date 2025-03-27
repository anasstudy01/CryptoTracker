import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import globalscope from "../GlobalContext/context";
import { fetchGraphData } from "../../services/fetchGraphData";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { Chart, CategoryScale } from "chart.js/auto";

// Register Chart.js components
Chart.register(CategoryScale);

function CoinInfo() {
  const { coinid } = useParams();
  const { currency } = useContext(globalscope);

  const { data, isloading, isError, error } = useQuery({
    queryKey: ["coinGraph", coinid],
    queryFn: () => fetchGraphData(coinid, currency, 7, "daily", 0),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });
  if (isloading) <div>Loading...</div>;
  if (isError) <div>Error:{error.message}</div>;
  if(!data) return <div>datafetcherror...</div>;
  console.log(data);
  const chartData = {
    labels: data.market_caps.map((point) => {
      const date = new Date(point[0]);
      return `${date.getDate()}/${date.getMonth() + 1}`; // Format as DD/MM
    }),
    datasets: [
      {
        label: "Market Caps",
        data: data.market_caps.map((point) => point[1]), // Extract market caps
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  return (
    <>
      <div className="w-full h-full p-10">
        <h1>Graph</h1>

        <Line data={chartData} />
      </div>
    </>
  );
}

export default CoinInfo;
