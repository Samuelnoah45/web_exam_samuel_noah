"use client";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { RootState } from "@/lib/redux";
import { setFilter } from "../lib/redux/slices/JokeSlice";
import { Icon } from '@iconify/react';

const categories = [
  "Programming",
  "Miscellaneous",
  "Dark",
  "Pun",
  "Spooky",
  "Christmas",
];

export default function FilterSelect(): React.ReactNode {
  const filter = useSelector((state: RootState) => state.jokes.filter);
  const dispatch = useDispatch();
  const toggleFilter = (value: string) => {
    dispatch(
      setFilter({
        ...filter,
        category: filter.category.includes(value)
          ? filter.category.filter((cat) => cat !== value)
          : [...filter.category, value],
      })
    );
  };

  return (
    <div className="flex gap-2">
      {categories.map((value) => {
        return (
          <button  onClick={() => toggleFilter(value)} 
           key={value}
           className={`flex    items-center space-x-2  rounded-md p-2 px-4 
           ${filter.category.includes(value)?' bg-primary-400 text-white':'text-primary-400 border border-primary-400'}` } >
            
            <Icon  icon="ic:round-check" className={`text-xl text-white ${ filter.category.includes(value)?'inline-block':'hidden'}`}/>
             <p>{value}</p> 
             </button>  
       
        );
      })}
    </div>
  );
}
