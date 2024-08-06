//"use client";
import { Joke } from "@/types";
import { Icon } from '@iconify/react';


export default function JokeCard({ joke }: { joke: Joke }) {
  return (
     
     <div>
       <div className="">
       <div className="border-gray-200 border  flex items-start justify-between font-poppins relative  p-4 rounded-md">
    <div className="flex flex-col gap-2">
         <div>
         <Icon  icon="cil:speak" className={`text-xl text-white `}/>
         <p className="text-lg">{joke.setup || joke?.joke}</p>
         </div>
         <p className="text-lg ">{joke.delivery}</p>
    </div>

    </div>
    </div>
     
     </div>
  );
}
