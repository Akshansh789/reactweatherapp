import axios from "axios";

const baseUrl='https://api.openweathermap.org/data/2.5/weather?';
const apiKey='13bb976fb333c7df2b5db7107f39b42a';

export const getWeatherData = async (cityname) => {
    try {
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;

    }catch(error)  {
        throw error;
    }
}