import { MapPin, Star } from "lucide-react";
import { Skeleton } from "../ui/skeleton"; 

function HotelCard({ hotel, loading }) {
  return (
    <div className="block group relative">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src={hotel?.image}
            alt={hotel?.name}
            className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-3 space-y-2">
        {/* Hotel Name */}
        {loading ? (
          <Skeleton className="h-6 w-3/4 rounded" />
        ) : (
          <div className="font-semibold text-lg">{hotel?.name}</div>
        )}

        {/* Location */}
        {loading ? (
          <Skeleton className="h-4 w-1/2 rounded" />
        ) : (
          <div className="text-sm text-muted-foreground flex items-center">
            <MapPin className="w-4 h-4 inline mr-1" /> {hotel?.location}
          </div>
        )}

        {/* Rating & Reviews */}
        {loading ? (
          <Skeleton className="h-4 w-1/3 rounded" />
        ) : (
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-medium">{hotel?.rating}</span>
            <span className="text-muted-foreground">({hotel?.reviews?.total} Reviews)</span>
          </div>
        )}

        {/* Price */}
        {loading ? (
          <Skeleton className="h-5 w-1/4 rounded" />
        ) : (
          <div className="flex items-baseline space-x-1">
            <span className="text-xl font-bold">${hotel?.price}</span>
          </div>
        )}
      </div>

      {/* Make Entire Card Clickable Only if Data Exists */}
      {!loading && (
        <a href={`/hotels/${hotel?._id}`} className="absolute inset-0"></a>
      )}
    </div>
  );
}

export default HotelCard;