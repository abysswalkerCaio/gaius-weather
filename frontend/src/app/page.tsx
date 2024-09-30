"use client";

import { useState, useEffect } from "react";
import { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

async function getCurrentWeatherData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/weather?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

async function getFiveDayWeatherForecastData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/forecast?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

async function getAirPollution() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/air_pollution?lat=-23.5475&lon=-46.6361&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export default function Home() {
  const [localInput, setLocalInput] = useState("");

  let currentWeatherData: Array<any> = [];
  let fiveDayWeatherForecastData: Array<any> = [];
  let airPollution: Array<any> = [];

  useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      currentWeatherData = await getCurrentWeatherData();
      console.log(currentWeatherData);
    };
    fetchCurrentWeatherData();
  }, []);

  useEffect(() => {
    const fetchFiveDayWeatherForecastData = async () => {
      fiveDayWeatherForecastData = await getFiveDayWeatherForecastData();
      console.log(fiveDayWeatherForecastData);
    };
    fetchFiveDayWeatherForecastData();
  }, []);

  useEffect(() => {
    const fetchAirPollution = async () => {
      airPollution = await getAirPollution();
      console.log(airPollution);
    };
    fetchAirPollution();
  }, []);

  async function onSearch(event: FormEvent<HTMLFormEvent>) {
    event.preventDefault();

    const input: any = document.getElementById("local");
    const valor = input.value;
    console.log(valor);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${valor}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      console.log(response.clone().json());
      if (response.status == 200) {
      }
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }

  const metrics = ["standart", "metric", "imperial"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
      <form
        onSubmit={onSearch}
        className="flex text-deep-ocean-900 dark:text-deep-ocean-200"
      >
        <div className="p-4 rounded-l bg-zinc-200 dark:bg-zinc-900 text-center">
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
          className="p-4 rounded-r bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-700 transition ease-in-out text-center"
          type="submit"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}
