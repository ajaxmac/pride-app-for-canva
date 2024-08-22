/* eslint-disable no-console */
import { GiphyFetch } from "@giphy/js-fetch-api";
import { GIPHY_KEY } from "../data";

export const fetchGifs = async (search: string) => {
  const gf = new GiphyFetch(GIPHY_KEY);
  const results = await gf.search(search, { limit: 10 });
  console.warn('Giphy search results', results);
  
  const gifs = results.data.map((gif) => {
    return {
      name: gif.title,
      yearCreated: gif.import_datetime,
      slug: gif.slug,
      mimeType: gif.type,
      url: gif.url,
      thumbnailUrl: gif.images.fixed_height.url,
    };
  });
  console.log(gifs);
  return gifs;
};