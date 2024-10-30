export type Image = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description?: string;
  user: {
    name: string;
  };
  likes?: number;
};

export type FetchArticlesResponse = {
  results: Image[];
};
