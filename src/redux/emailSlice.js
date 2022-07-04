import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: {
    email: "",
  },
  reducers: {
    setEmailUser: (state, { payload }) => {
      return {
        ...state,
        email: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmailUser } = emailSlice.actions;

export default emailSlice.reducer;
