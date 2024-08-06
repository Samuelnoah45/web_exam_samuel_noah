import FilterSelect from "@/components/Filter";
import JokeList from "@/components/JokeList";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <main  className="flex justify-center py-24">
   <div className="flex gap-4  lg:w-[50%] w-full flex-col">
      <h1 className="text-3xl  font-bold">Jokes</h1>

      {/* search bar */}
      <SearchBar />

      {/* filters */}
      <FilterSelect />

      {/* list of jokes */}
      <JokeList />
    </div>

    </main>
    
  );
}
