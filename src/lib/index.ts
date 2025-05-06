/* eslint-disable no-console */
import dayjs from "dayjs";
import { FETCH_OPTIONS, LGBT, TENOR_API_KEY, TENOR_SEARCH_API } from "../data";
import type { TenorGifType } from "../types";

export const fetchGifs = async (search = "", nextGif = "") => {
  const q = search === "" ? LGBT : `${search} ${LGBT}`;
  const random = search === "" ? true : false;
  const params = new URLSearchParams();
  params.append("q", q);
  params.append("random", random.toString());
  params.append("locale", window.navigator.language);
  params.append("contentfilter", "low"); // G, PG, and PG-13
  params.append("media_filter", "minimal");
  params.append("limit", "20");
  params.append("key", TENOR_API_KEY);

  if (nextGif) {
    params.append("pos", nextGif);
  }

  const url = `${TENOR_SEARCH_API}${params.toString()}`;

  const { next, results } = await fetch(url, FETCH_OPTIONS)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  const gifs = results.map((gif: TenorGifType) => {
    const { title, created, content_description, url, tags, media_formats } =
      gif;
    return {
      name: title,
      yearCreated: dayjs.unix(created).format("YYYY"),
      description: content_description,
      mimeType: gif.type,
      url,
      tags,
      thumbnailUrl: media_formats.tinygif?.url,
    };
  });

  return { gifs, next };
};
