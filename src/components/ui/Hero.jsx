import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useDispatch } from "react-redux";
import {submit} from "@/lib/features/searchSlice";

export default function Hero() {

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    console.log(searchQuery);
    dispatch(submit(searchQuery));
    // Implement AI search functionality
  };

  return (
    <div className="relative z-10 flex flex-col items-center text-white justify-center px-8 pt-32 pb-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Find Your Best Staycation
      </h1>
      <p className="text-xl opacity-80 text-center max-w-2xl mt-4">
        Describe your dream destination and experience, and we'll find the perfect place for you.
      </p>

      <form onSubmit={handleSearch} className="w-full max-w-xl bg-black/10 backdrop-blur-md lg:h-16 rounded-full p-2 flex items-center mt-6">
        <Input
          type="text"
          name="search"
          placeholder="Describe your destination, experience, or hotel..."
          className="flex-grow bg-transparent text-lg text-white placeholder-white outline-none focus:ring-0"
        />
        <Button type="submit" className="rounded-full ml-4 flex items-center gap-2 lg:h-12 px-6">
          <Sparkles size={20} />
          AI Search
        </Button>
      </form>
    </div>
  );
}
