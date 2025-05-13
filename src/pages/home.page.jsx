import React from "react";
import Hero from "@/components/ui/Hero";
import HotelListings from "@/components/ui/HotelListings";
import bgImage from "@/assets/images/1.jpg";

function HomePage() {
  return (
    <main>
      <div className="relative min-h-screen">
        <Hero />
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-1"
        />
      </div>
      <HotelListings />
      
    </main>
  );
}
export default HomePage;