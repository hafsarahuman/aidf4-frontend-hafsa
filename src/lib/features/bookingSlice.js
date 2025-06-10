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
        image: "https://i.pinimg.com/736x/e0/35/8d/e0358d0a9f0965750580b6c705423c35.jpg?hotel,room",
      },
    ],
    profile: {
      name: "Hafsa",
      email: "hafsa@example.com",
      image: "https://i.pinimg.com/736x/55/6d/4d/556d4d7afb3864a2dd0748a1df3fc43d.jpg", 
    },
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
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { addBooking, cancelBooking, updateProfile } = bookingSlice.actions;
export default bookingSlice.reducer;
