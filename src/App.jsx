import { Button } from "@/components/ui/button"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Navigation from "./components/ui/Navigation";
import Hero from "./components/ui/Hero";
import bgImage from "./assets/images/1.jpg";
import HotelListing from "./components/ui/HotelListings"
import { Toaster } from "sonner";




function App() {
  return (
    <>
      <Navigation />
      <div className="relative w-screen h-screen overflow-hidden">
        <Hero />
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 left-0 w-screen h-full object-cover -z-10"
        />
      </div>
      <HotelListing />
      <Toaster richColors position="top-right" />

       
    </>
  );
}

export default App;
