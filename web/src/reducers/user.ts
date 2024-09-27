import { loginUserRequest } from "@/actions/user";
import { User } from "@/interfaces/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User | null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      return action.payload; // Set the user
    },
    logout: (state) => {
      localStorage.removeItem("token");
      return null; // Clear the user from state
    },
    loginToken: (state, action: PayloadAction<string>) => {
      // Handle the login with token logic here if needed
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserRequest.pending, (state) => {})
      .addCase(loginUserRequest.fulfilled, (state, action) => {})
      .addCase(loginUserRequest.rejected, (state, action) => {});
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
