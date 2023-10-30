import axios from "axios";


const URL = 'http://localhost:8000';

const config = {
    headers: {
        'Content-Type': 'application/json', // Set the content type if needed
    },
};

export const getNews = async () => {
    try {
        const response = await axios.get(`${URL}/news`, config);
        return response;
    } catch (error) {
        console.log("Error while calling get news API", error);
    }
}
