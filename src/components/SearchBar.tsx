"use client";
import { ChangeEvent, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/lib/redux/slices/JokeSlice";
import { RootState } from "@/lib/redux";
import { Icon } from '@iconify/react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.jokes.filter);

  const onSearch = () => {
    dispatch(
      setFilter({
        ...filter,
        searchQuery: searchQuery,
      })
    );
  };

  return (
      
        <div className="flex justify-center items-center w-full bg-primary-400 rounded-md" >
        <input  className="border-gray-200 w-full border rounded-l-md  py-2 px-4" type="text" placeholder="search Jokes ..."
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
              if (e.target.value === "") {
                onSearch();
              }
            

            }}
        ></input>
        <button onClick={onSearch} className=" p-1">
        <Icon  icon="ic:baseline-search" className="text-3xl text-white"/>
        </button>
          
        </div>
  );
}
