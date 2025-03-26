import axiosInstance from "../src/helper/axiosInstance";

export async function fetchCoinData(page,currency='inr') {
     const perPage = 10;
    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        console.log(response);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}