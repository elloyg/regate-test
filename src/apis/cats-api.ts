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

async function listRandomCats(limit: number = 10) {
  const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;
  return (await fetch(url)).json() as Promise<Cat[]>;
}

export const CatsAPI = { listRandomCats };
