"use client";

import PrimaryHeader from "@/app/components/headings/PrimaryHeader";
import SecondaryHeader from "@/app/components/headings/SecondaryHeader";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faMagnifyingGlass,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [localInput, setLocalInput] = useState("");
  const [weather, setWeatherData] = useState([]);
  const [forecast, setForecastData] = useState([]);
  const [airPollution, setAirPollutionData] = useState([]);

  useEffect(() => {
    fetchWeatherData();
    fetchForecastData();
    fetchAirPollutionData();
  }, []);

  const fetchWeatherData = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/weather?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchForecastData = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/forecast?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAirPollutionData = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/air_pollution?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((response) => {
        setAirPollutionData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${localInput}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const metrics = ["standart", "metric", "imperial"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] gap-5">
      <form className="flex text-deep-ocean-900 dark:text-deep-ocean-200 shadow-md dark:shadow-zinc-800 h-fit">
        <div className="py-4 px-6 rounded-l bg-zinc-200 dark:bg-zinc-900 text-center">
          <FontAwesomeIcon icon={faCity} />
        </div>
        <input
          id="local"
          type="text"
          name="local"
          onChange={(event) => setLocalInput(event.target.value)}
          className="p-4 outline-none bg-zinc-200 dark:bg-zinc-900 min-w-0 w-full"
          placeholder="Search for cities..."
        />
        <button
          onClick={searchData}
          className="py-4 px-6 rounded-r bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-700 transition ease-in-out text-center"
          type="button"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div>Change Temperature</div>
      <section id="current-weather">
        <PrimaryHeader title={"Current Weather"} />
        {weather.length < 1 ? (
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="self-center fa-spin"
          />
        ) : (
          <div className="flex flex-col text-deep-ocean-900 dark:text-deep-ocean-200">
            <SecondaryHeader
              title={weather?.name + ", " + weather?.sys?.country}
            />
            <div className="text-lg">
              {weather?.weather &&
                weather.weather.map((weather) => (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${weather.icon}@2x.png`}
                    alt={weather.description}
                  />
                )) + parseInt(weather?.main?.temp)}
            </div>
          </div>
        )}
      </section>
      <section id="8-day-forecast" className="flex flex-col break-all">
        <PrimaryHeader title={"8-Day Forecast"} />
      </section>
    </div>
  );
}
