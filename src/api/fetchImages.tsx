export const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchImages = async (query: string, page: number) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await res.json();
  return data.results;
};