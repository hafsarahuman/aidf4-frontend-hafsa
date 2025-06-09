// src/pages/account.page.jsx


import { useSelector, useDispatch } from "react-redux";
import { format, isAfter } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { cancelBooking } from "@/lib/features/bookingSlice";
import { User, Mail, Calendar, Hotel } from "lucide-react";

const AccountPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings) || [];

  const handleCancel = (id) => {
    dispatch(cancelBooking(id));
    toast.warning(`Booking ${id} has been cancelled`);
  };

  return (
    <main className="container mx-auto px-4 py-10 pt-24 space-y-10">
      <h1 className="text-4xl font-bold text-center">My Account</h1>

      {/* User Info */}
      <div className="text-center space-y-2">
        <p className="text-lg text-gray-700 flex justify-center items-center gap-2">
          <User size={18} /> Name: <span className="font-semibold">Hafsa Rahuman</span>
        </p>
        <p className="text-lg text-gray-700 flex justify-center items-center gap-2">
          <Mail size={18} /> Email: <span className="font-semibold">Hafsarahuman@gmail.com</span>
        </p>
      </div>

      {/* Bookings */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">My Bookings</h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">You have no bookings yet.</p>
        ) : (
          bookings.map((booking) => {
            const isUpcoming = isAfter(new Date(booking.checkIn), new Date());
            const status = isUpcoming ? "Upcoming" : "Completed";

            return (
              <Card key={booking.id} className="shadow-md border">
                <CardHeader className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
                  <div>
                    <CardTitle className="text-xl font-semibold flex items-center gap-2">
                      <Hotel size={20} />
                      {booking.hotelName}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{booking.location}</p>
                    <p className="text-sm text-gray-700 capitalize">Room: {booking.roomType}</p>
                    {booking.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Note:</span> {booking.description}
                      </p>
                    )}
                  </div>

                  <div className="text-sm text-right space-y-1">
                    <p className="text-muted-foreground flex items-center gap-1 justify-end">
                      <Calendar size={14} />
                      Check-in: <span className="font-medium">{format(booking.checkIn, "PPP")}</span>
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1 justify-end">
                      <Calendar size={14} />
                      Check-out: <span className="font-medium">{format(booking.checkOut, "PPP")}</span>
                    </p>
                    <Badge className={isUpcoming ? "bg-green-500" : "bg-gray-500"}>
                      {status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex justify-between items-center flex-wrap gap-4 text-sm">
                  <div className="text-muted-foreground">
                    Total: <span className="font-bold">${booking.total?.toFixed(2)}</span>
                    <br />
                    <span className="text-xs text-gray-500">Booking ID: {booking.id}</span>
                  </div>
                  {isUpcoming && (
                    <Button
                      variant="destructive"
                      onClick={() => handleCancel(booking.id)}
                    >
                      Cancel
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
};

export default AccountPage;
