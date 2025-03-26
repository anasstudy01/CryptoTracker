import axiosInstance from "../src/helper/axiosInstance";
export async function fetchCoinDetails(id) {
    try {
        console.log("Requesting URL:", `/coins/${id}`);
        const response = await axiosInstance.get(`/coins/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error in fetchCoinDetails:", error);
        throw error; // Rethrow the error for React Query to handle
    }
}