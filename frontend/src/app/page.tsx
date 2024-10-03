"use client";

import PrimaryHeader from "@/app/components/headings/PrimaryHeader";
import SecondaryHeader from "@/app/components/headings/SecondaryHeader";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faMagnifyingGlass,
  faCircleNotch,
  faWind,
  faArrowDown,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faDroplet,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [localInput, setLocalInput] = useState("");
  const [weather, setWeatherData]: Array<any> = useState([]);
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
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] gap-5 text-zinc-800 dark:text-zinc-300 max-w-[1000px]">
      <div className="flex text-deep-ocean-950 dark:text-deep-ocean-200 shadow-md dark:shadow-zinc-800 h-fit">
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
      </div>
      <div>Change Temperature</div>
      <section id="current-weather">
        {weather.length < 1 ? (
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="self-center fa-spin"
          />
        ) : (
          <div className="flex flex-col">
            <PrimaryHeader
              title={weather?.name + ", " + weather?.sys?.country}
            />
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center">
                {weather?.weather.map((weather: any, index: number) => (
                  <img
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${weather.icon}@2x.png`}
                    alt={weather.description}
                    width={50}
                    height={50}
                    className="select-none"
                  />
                ))}
                <span className="text-xl sm:text-2xl md:text-3xl text-deep-ocean-950 dark:text-deep-ocean-200">
                  {parseInt(weather?.main?.temp) + " °C"}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-semibold">
                  Feels like {parseInt(weather?.main?.feels_like) + " °C. "}
                  {weather?.weather.map((weather: any, index: number) => (
                    <span key={index}>
                      {weather.description.charAt(0).toUpperCase() +
                        weather.description.slice(1) +
                        ". "}
                    </span>
                  ))}
                </div>
                <div className="flex max-[320px]:flex-col flex-row max-[320px]:gap-2 gap-4 border-l-2 border-deep-ocean-900 dark:border-deep-ocean-200 pl-3 max-[320px]:pl-6 ">
                  <div className="flex flex-col gap-2 max-[320px]:flex-col min-[321px]:gap-4">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faWind}
                        className="text-xs sm:text-sm text-deep-ocean-950 dark:text-deep-ocean-200"
                      />
                      {weather?.wind?.speed} m/s
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faTemperatureArrowUp}
                        className="text-xs sm:text-sm text-deep-ocean-950 dark:text-deep-ocean-200"
                      />
                      {parseInt(weather?.main?.temp_max)} °C
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faTemperatureArrowDown}
                        className="text-xs sm:text-sm text-deep-ocean-950 dark:text-deep-ocean-200"
                      />
                      {parseInt(weather?.main?.temp_min)} °C
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 max-[320px]:flex-col min-[321px]:gap-4">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-xs sm:text-sm text-deep-ocean-950 dark:text-deep-ocean-200"
                      />
                      {weather?.main?.pressure} hPa
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faDroplet}
                        className="text-xs sm:text-sm text-deep-ocean-950 dark:text-deep-ocean-200"
                      />
                      Humidity: {weather?.main?.humidity} %
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="text-xs sm:text-sm text-deep-ocean-950 dark:text-deep-ocean-200"
                      />
                      Visibility: {weather?.visibility / 1000} km
                    </div>
                  </div>
                </div>
              </div>
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
