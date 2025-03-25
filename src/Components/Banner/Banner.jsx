import cover from "../Banner/Banner1.jpeg";

function Banner() {
  return (
    <>
      <div className="banner w-full bg-white h-90">
        <img src={cover} alt="cover" className="w-full  h-full " />
        <div className="banner-text text-center text-white absolute top-50 left-40">
          <h1 className="text-4xl font-bold">Welcome to CoinMarket</h1>
          <p className="text-lg">Get the latest updates on cryptocurrency</p>
          <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full mt-4 ">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
