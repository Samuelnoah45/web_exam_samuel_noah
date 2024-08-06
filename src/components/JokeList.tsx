"use client";

import { Joke } from "@/types";
import { useEffect, useState } from "react";
import JokeCard from "./Joke";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux";
import Loading from "./Loading";
import { setJokes } from "@/lib/redux/slices/JokeSlice";

type ApiResponse = {
  error: boolean;
  amount: number;
  jokes: Joke[];
};

export default function JokeList() {
  //const [jokes, setJokes] = useState<Joke[]>([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);


  const filter = useSelector((state: RootState) => state.jokes.filter);

  const fetchJokes = async () => {
    let searchUrl = "https://v2.jokeapi.dev/joke/";
    if (filter.category.length == 0) {
      searchUrl += "Any";
    } else {
      searchUrl += filter.category.join(",");
    }

    if (filter.searchQuery) {
      searchUrl += `?contains=${filter.searchQuery}`;
    }

    if (filter.searchQuery) searchUrl += "&amount=10";
    else {
      searchUrl += "?amount=10";
    }

    console.log(searchUrl);
    const res = await fetch(searchUrl);
    return res.json();
  };

  useEffect(() => {
    setLoading(true);
    fetchJokes()
      .then((res: ApiResponse) => {
        dispatch(setJokes(res.jokes));
        console.log("Jokes", res);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
       
      });
  }, [filter]);

  const jokes = useSelector((state: RootState) => state.jokes.jokes);

  return (
    <div className="grid grid-cols-1 gap-4 w-full ">
      
      {!loading ? (
        jokes ? (
          jokes.map((joke: Joke) => {
            return <JokeCard key={joke.id} joke={joke} />;
          })
        ) : (
          <p className="flex-1 col-span-full text-center">No result</p>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}
