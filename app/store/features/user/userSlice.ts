import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "@/app/types";

const initialState: UserState = {
  id: "1",
  name: "Victor Okeke",
  email: "victor.okeke@gmail.com",
  isAuthenticated: true, // Set to true for demo purposes
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<Omit<UserState, "isAuthenticated">>,
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.isAuthenticated = false;
    },
    toggleAuth: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const { setUser, clearUser, toggleAuth } = userSlice.actions;
export default userSlice.reducer;
