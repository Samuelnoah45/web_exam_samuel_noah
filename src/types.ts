export type Joke = {
  category: string;
  type: string;
  setup: string;
  delivery: string;
  joke?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

export type Filter = {
  searchQuery: string;
  category: string[];
};
