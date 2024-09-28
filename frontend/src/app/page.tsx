import Form from "@/app/components/Form"

export default async function Home() {
  const getCurrentWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.API_KEY}`
      );
      return response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const getFiveDayWeatherForecastData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.API_KEY}`
      );
      return response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const getAirPollutiontData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.API_KEY}`
      );
      return response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const currentWeatherData = await getCurrentWeatherData();
  const fiveDataWeatherForecastData = await getFiveDayWeatherForecastData();
  const airPollution = await getAirPollutiontData();

  const metrics = ["standart", "metric", "imperial"];

  return (
    <div>
      <Form />
    </div>
  );
}
