import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCreateBookingMutation, useGetHotelByIdQuery } from "@/lib/api";
import { Coffee, MapPin, MenuIcon as Restaurant, Star, Tv, Wifi, Building2, UtensilsCrossed } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { BookingFormModal } from "@/components/ui/BookingFormModal";
import { toast } from "sonner";

const HotelPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: hotel,
    isLoading,
    isError,
    error,
  } = useGetHotelByIdQuery(id);

  const [createBooking, { isLoading: isCreateBookingLoading }] = useCreateBookingMutation();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBook = async (formData) => {
    try {
      const booking = await createBooking({
        hotelId: id,
        checkIn: new Date(formData.checkIn).toISOString(),
        checkOut: new Date(formData.checkOut).toISOString(),
        roomNumber: 200,
        nights: formData.nights,
        roomType: formData.roomType,
        adults: formData.adults,
        children: formData.children,
        specialRequests: formData.specialRequests,
      }).unwrap();

      toast.success("🎉 Booking Confirmed!");
      setShowBookingModal(false);

      // ✅ Redirect to payment page with bookingId
      navigate(`/booking/payment?bookingId=${booking._id}`);
    } catch (error) {
      toast.error("Booking failed. Please try again.");
      console.error("Booking failed:", error);
    }
  };
  if (isLoading)
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="w-full h-[400px] rounded-lg" />
            <div className="flex space-x-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-28" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
            <Skeleton className="h-4 w-36" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );

  if (isError) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <main className="container mx-auto px-4 pt-24 pb-8 min-h-screen">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="w-full h-[400px]">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-wrap gap-5 mt-2">
          <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5rounded-full text-sm flex items-center space-x-2">
            <Building2 className="w-4 h-4" />
            <span>Rooftop View</span>
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white  rounded-full text-sm flex items-center space-x-2">
            <UtensilsCrossed className="w-4 h-4" />
            <span>French Cuisine</span>
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5rounded-full text-sm flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>City Center</span>
          </Badge>
        </div>

        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{hotel.name}</h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-5 w-5 text-muted-foreground mr-1" />
                <p className="text-muted-foreground">{hotel.location}</p>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Star className="h-4 w-4" />
              <span className="sr-only">Add to favorites</span>
            </Button>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-bold">{hotel?.rating ?? "No rating"}</span>
            <span className="text-muted-foreground">
              ({hotel?.reviews?.toLocaleString() ?? "No"} reviews)
            </span>
          </div>
          <p className="text-muted-foreground">{hotel.description}</p>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center"><Wifi className="h-5 w-5 mr-2" /><span>Free Wi-Fi</span></div>
                <div className="flex items-center"><Restaurant className="h-5 w-5 mr-2" /><span>Restaurant</span></div>
                <div className="flex items-center"><Tv className="h-5 w-5 mr-2" /><span>Flat-screen TV</span></div>
                <div className="flex items-center"><Coffee className="h-5 w-5 mr-2" /><span>Coffee maker</span></div>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">${hotel.price}</p>
              <p className="text-sm text-muted-foreground">per night</p>
            </div>
            <Button className="h-12 w-32" onClick={() => setShowBookingModal(true)}>Book Now</Button>
          </div>
        </div>
      </div>

      <BookingFormModal
        open={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        onSubmit={handleBook}
      />
      <div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Hotel Location</h2>
  <div className="w-full h-[400px] rounded-lg overflow-hidden border shadow">
    <iframe
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0"
      src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.location)}&output=embed`}
    ></iframe>
  </div>
</div>

    </main>
  );
};

export default HotelPage;
