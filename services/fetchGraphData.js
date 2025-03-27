import axiosInstance from "../src/helper/axiosInstance";
export async function fetchGraphData(id,currency,days,intervals,precision) {
    try {
        console.log("Requesting URL:", `coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${intervals}&precision=${precision}`);
        const response = await axiosInstance.get(`coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${intervals}&precision=${precision}`);
        return response.data;
    } catch (error) {
        console.error("Error in fetchCoinDetails:", error);
        throw error; // Rethrow the error for React Query to handle
    }
}