import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Search, MapPin, Star, Shield } from "lucide-react";
import { useDispatch } from "react-redux";
import { submit } from "@/lib/features/searchSlice";

export default function Hero() {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    dispatch(submit(searchQuery));
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-sm"></div>
      
      <div className="relative z-20  mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
        Find Your Best Staycation
      </h1>
          
        <p className="text-xl md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
        Describe your dream destination and experience, and we'll find the perfect place for you.
        </p>

        <form onSubmit={handleSearch} className="w-full  bg-black/40 backdrop-blur-md lg:h-16 rounded-full p-2 flex items-center mt-6">
        <Input
          type="text"
          name="search"
          placeholder="Describe your destination, experience, or hotel..."
          className="flex-grow  bg-transparent lg:text-lg  text-white placeholder:text-white/50 border-none outline-none ring-0 ring-offset-0 focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button type="submit" className="rounded-full ml-4 flex items-center gap-2 lg:h-12 px-6">
          <Sparkles size={20} className="animate-pulse"/>
          AI Search
        </Button>
      </form>

        <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>1000+ Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            <span>Luxury Experiences</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Secure Booking</span>
          </div>
        </div>
      </div>
    </div>
  );
}