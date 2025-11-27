import { AnimeListProps, AnimeData } from "@/components/AnimeList";

// ===============================
// Utility API Functions (TS)
// ===============================

export const getAnimeResponse = async (
  resource: string,
  query?: string
): Promise<AnimeListProps["animes"]> => {

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const url = query
    ? `${baseUrl}/${resource}?${query}`
    : `${baseUrl}/${resource}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  const json: AnimeListProps["animes"] = await response.json();
  return json;
};


// Ambil nested property dari setiap item data[]
export const getNestedAnimeResponse = async (
  resource: string,
  objectProperty: keyof AnimeData
): Promise<any[]> => {

  const response = await getAnimeResponse(resource);

  return response.data.flatMap((item) => item[objectProperty]);
};


// Reproduce slice random dari data
export const reproduce = (
  data: AnimeData[],
  gap: number
) => {
  const first = Math.floor(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  return {
    data: data.slice(first, last),
  };
};
