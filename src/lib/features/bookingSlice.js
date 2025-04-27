// src/lib/features/bookingSlice.js

import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [
      {
        id: "1",
        hotelName: "Hotel",
        location: "City",
        roomType: "Deluxe",
        description: "Description",
        checkIn: new Date().toISOString(),
        checkOut: new Date(Date.now() + 86400000).toISOString(),
        total: 120.0,
      },
    ], // clearer name than 'list'
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
