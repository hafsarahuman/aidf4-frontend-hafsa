import React from "react";
import Hero from "@/components/ui/Hero";
import HotelListings from "@/components/ui/HotelListings";
import DiscoverSection from "@/components/ui/DiscoverSection";
import bgImage from "@/assets/images/1.jpg";
import Offers from "@/components/ui/offers";



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
      <DiscoverSection/>
      <Offers/>
      

    </main>
  );
}
export default HomePage;