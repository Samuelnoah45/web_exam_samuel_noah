import { Filter, Joke } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";

export interface JokesState {
  jokes: Joke[];
  filter: {
    searchQuery: string;
    category: string[];
  };
}

export const initialState: JokesState = {
  jokes: [],
  filter: {
    searchQuery: "",
    category: [],
  },
};

export const jokesSlice: Slice<JokesState> = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    setJokes: (state, action: PayloadAction<Joke[]>) => {
      console.log("Payload", action);
      state.jokes = action.payload;
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJokes, setFilter } = jokesSlice.actions;

export default jokesSlice.reducer;
