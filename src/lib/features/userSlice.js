import { createSlice } from "@reduxjs/toolkit";

const initialState = {  // Renamed to match the reference inside createSlice
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState, // Now correctly referencing the defined variable
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions; 
export default userSlice.reducer;
