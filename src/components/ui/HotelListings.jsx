import React, { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import HotelCard from "./HotelCard";
import { useSelector } from "react-redux";
import { useGetHotelsForSearchQueryQuery } from "@/lib/api";

export default function HotelListings() {
  const searchValue = useSelector((state) => state.search.value);
  const userSlice = useSelector((state) => state.user); // Optional, if you're using user info

  // Fetch hotel data using search value
  const {
    data,
    isLoading,
    isError,
    error,
  } = useGetHotelsForSearchQueryQuery({ query: searchValue });

  // Extract raw hotel data from response
  const hotelsRaw = data?.map((hotel) => hotel.hotel) || [];

  // Helper to infer country from location
  function getCountryFromLocation(location) {
    if (!location) return "Unknown";
    const loc = location.toLowerCase();
    if (loc.includes("tokyo")) return "Japan";
    if (loc.includes("paris")) return "France";
    if (loc.includes("rome")) return "Italy";
    if (loc.includes("sydney")) return "Australia";
    return "Unknown";
  }

  // Enrich hotels with country information
  const hotels = hotelsRaw.map((hotel) => ({
    ...hotel,
    country: hotel.country || getCountryFromLocation(hotel.location),
  }));

  // State to manage selected filter country
  const [selectedCountry, setSelectedCountry] = useState("ALL");

  // Filter hotels by selected country
  const filteredHotels =
    selectedCountry === "ALL"
      ? hotels
      : hotels.filter((hotel) => hotel.country === selectedCountry);

  return (
    <div className="container mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Top Trending Hotels Worldwide
      </h1>
      <p className="text-gray-600 mb-4">
        Discover the most trending hotels worldwide for an unforgettable
        experience.
      </p>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        {["ALL", "France", "Italy", "Australia", "Japan"].map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedCountry === country
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Hotel Cards */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {isLoading ? (
          Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-white rounded-lg shadow-md"
              >
                <Skeleton className="w-full h-40 rounded-t-lg" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-5 w-1/3" />
                </div>
              </div>
            ))
        ) : isError ? (
          <p className="text-red-600">
            Error fetching hotels: {error?.message}
          </p>
        ) : (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))
        )}
      </div>
    </div>
  );
}
