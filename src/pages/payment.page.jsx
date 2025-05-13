import CheckoutForm from "@/components/ui/CheckoutForm";
import { useSearchParams } from "react-router-dom";
import { useGetBookingByIdQuery } from "@/lib/api";

function PaymentPage() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  // Regex check for valid ObjectId
  const isValidBookingId = bookingId && /^[a-f\d]{24}$/i.test(bookingId);

  // 🛑 Early return BEFORE using query hook
  if (!isValidBookingId) {
    return (
      <div className="text-red-500 font-semibold">
        Invalid or missing Booking ID.
      </div>
    );
  }

  // ✅ Now safe to call the query
  const { data: booking, isLoading: isBookingLoading } = useGetBookingByIdQuery(bookingId);

  if (isBookingLoading || !booking) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen pt-24">
      <h2 className="text-4xl font-bold">Review Your Booking</h2>
      <div className="mt-4">
        <CheckoutForm bookingId={booking._id} />
      </div>
    </main>
  );
}

export default PaymentPage;
