// src/pages/account.page.jsx

import { useSelector, useDispatch } from "react-redux";
import { MapPin, CalendarCheck, XCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format, isAfter } from "date-fns";
import { cancelBooking } from "@/lib/features/bookingSlice";
import { toast } from "sonner";

function AccountPage() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const profile = useSelector((state) => state.user.profile); // Make sure this matches your store

  const handleCancel = (id) => {
    dispatch(cancelBooking(id));
    toast.success("Booking cancelled");
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Profile Section */}
      <div className="mt-24 p-6 border rounded-xl bg-white shadow-sm flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border">
          <img
            src={profile?.image || "https://i.pinimg.com/736x/55/6d/4d/556d4d7afb3864a2dd0748a1df3fc43d.jpg"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{profile?.name || "Hafsa Rahuman"}</h2>
          <p className="text-muted-foreground text-sm">{profile?.email || "hafsarahuman123@gmail.com"}</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center">Your Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-muted-foreground text-center">No bookings yet.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => {
            const isUpcoming = isAfter(new Date(booking.checkIn), new Date());
            return (
              <div
                key={booking.id}
                className="border rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow-sm bg-white"
              >
                {/* Hotel Image */}
                <div className="aspect-[4/3] w-full md:w-1/3 overflow-hidden rounded-xl">
                  <img
                    src={booking.image || "/placeholder.jpg"}
                    alt={booking.hotelName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Booking Info */}
                <div className="flex-1 space-y-2">
                  <h2 className="text-xl font-semibold">{booking.hotelName}</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {booking.location}
                  </p>

                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4" />
                    {format(new Date(booking.checkIn), "PPP")} →{" "}
                    {format(new Date(booking.checkOut), "PPP")} ({booking.nights} nights)
                  </div>

                  <div className="text-sm">
                    Room: <span className="capitalize">{booking.roomType}</span>, Adults:{" "}
                    {booking.adults}, Children: {booking.children}
                  </div>

                  {booking.specialRequests && (
                    <p className="text-sm italic">“{booking.specialRequests}”</p>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        isUpcoming ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                      }`}
                    >
                      {isUpcoming ? "Upcoming" : "Completed"}
                    </span>

                    {isUpcoming && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleCancel(booking.id)}
                        className="flex items-center gap-1"
                      >
                        <XCircle className="w-4 h-4" />
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AccountPage;
