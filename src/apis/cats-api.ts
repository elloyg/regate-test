import { useState } from "react";

export type CatBreed = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  wikipedia_url: string;
};

export type Cat = {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: CatBreed[];
};

// TO HIDE :D
const API_KEY =
  "live_RnoKlaAUknkiAjQGaOCuhuO5DHGL5fcd0pSDMjn4yxAkijB9tTo8JT2ZLL40W5vw";

async function listRandomCats(limit: number = 10) {
  const url = `https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=${limit}&api_key=${API_KEY}`;
  return (await fetch(url)).json() as Promise<Cat[]>;
}

function useRandomCats() {
  const [cats, setCats] = useState<Cat[] | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  function fetch() {
    setLoading(true);
    setError(undefined);
    listRandomCats()
      .then(setCats)
      .catch(() => setError("Error fetching your cats 😿"))
      .finally(() => setLoading(false));
  }

  return { cats, fetch, loading, error };
}

export const CatsAPI = { listRandomCats, useRandomCats };
