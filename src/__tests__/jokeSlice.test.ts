import { jokesSlice, JokesState } from "../lib/redux/slices/JokeSlice";
import { Joke, Filter } from "@/types";
import { PayloadAction } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";

describe("jokesSlice", () => {
  let initialState: JokesState = {
    jokes: [],
    filter: {
      searchQuery: "",
      category: [],
    },
  };

  beforeEach(() => {
    initialState = {
      jokes: [],
      filter: {
        searchQuery: "",
        category: [],
      },
    };
  });

  it("should handle setJokes", () => {
    const jokes: Joke[] = [
      {
        category: "Pun",
        type: "twopart",
        setup: "How much did your chimney cost?",
        delivery: "Nothing, it was on the house.",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 231,
        safe: true,
        lang: "en",
      },
    ];
    const action: PayloadAction<Joke[]> = {
      type: "jokes/setJokes",
      payload: jokes,
    };

    const nextState = jokesSlice.reducer(initialState, action);

    expect(nextState.jokes).toEqual(jokes);
  });

  it("should handle setFilter", () => {
    const filter: Filter = {
      searchQuery: "",
      category: ["Pun"],
    };
    const action: PayloadAction<Filter> = {
      type: "jokes/setFilter",
      payload: filter,
    };

    const nextState = jokesSlice.reducer(initialState, action);

    expect(nextState.filter).toEqual(filter);
  });
});
