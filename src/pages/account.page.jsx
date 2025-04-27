// src/pages/account.page.jsx

import { useSelector, useDispatch } from "react-redux";
import { format, isAfter } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { cancelBooking } from "@/lib/features/bookingSlice";

const AccountPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings) || [];

  const handleCancel = (id) => {
    dispatch(cancelBooking(id));
    toast.warning(`Booking ${id} has been cancelled`);
  };

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Account
      </h1>

      <div className="mb-8 space-y-2 text-center">
        <p className="text-lg text-gray-700 font-medium">Name: Hafsa Rahuman</p>
        <p className="text-lg text-gray-700 font-medium">Email: Hafsarahuman@gmail.com</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">You have no bookings yet.</p>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => {
              const isUpcoming = isAfter(new Date(booking.checkIn), new Date());
              const status = isUpcoming ? "Upcoming" : "Completed";

              return (
                <Card key={booking.id} className="shadow-sm">
                  <CardHeader className="flex flex-col md:flex-row justify-between md:items-center">
                    <div>
                      <CardTitle className="text-xl font-semibold">{booking.hotelName}</CardTitle>
                      <p className="text-sm text-muted-foreground">{booking.location}</p>
                      <p className="text-sm text-gray-700 capitalize">Room: {booking.roomType}</p>
                      {booking.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Note:</span> {booking.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 md:mt-0 space-y-1 text-right text-sm">
                      <p className="text-muted-foreground">
                        Check-in: <span className="font-medium">{format(booking.checkIn, "PPP")}</span>
                      </p>
                      <p className="text-muted-foreground">
                        Check-out: <span className="font-medium">{format(booking.checkOut, "PPP")}</span>
                      </p>
                      <Badge className={isUpcoming ? "bg-green-500" : "bg-gray-500"}>
                        {status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex justify-between items-center flex-wrap gap-2">
                    <p className="text-muted-foreground">
                      Total: <span className="font-bold">${booking.total?.toFixed(2)}</span><br />
                      <span className="text-xs">Booking ID: {booking.id}</span>
                    </p>
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
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default AccountPage;
