import axios from "axios";
import { FetchArticlesResponse, Image } from "./types";

export const fetchArticles = async (
  page: number,
  query: string
): Promise<Image[]> => {
  const { data } = await axios.get<FetchArticlesResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        client_id: "MYM7bJdTmhADcMgcdu4WW3XOUzJlxzL5XA82nMszHKM",
        query: query,
        page: page,
        per_page: 7,
      },
    }
  );
  return data.results;
};
