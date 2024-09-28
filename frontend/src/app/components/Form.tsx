"use client";

import { useState } from "react";
import { FormEvent } from "react";

export default function Form() {
  const [localInput, setLocalInput] = useState("");

  async function onSearch(event: FormEvent<HTMLFormEvent>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localInput}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  }
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        name="local"
        onChange={(event) => setLocalInput(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}
