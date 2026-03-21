import axios from "axios";

async function getWeather() {
  try {
    const res = await axios.get("https://api.weatherapi.com/v1/current.json?q=London");
    console.log(res.data);
  } catch (err) {
    console.error("Error fetching weather:", err);
  }
}
