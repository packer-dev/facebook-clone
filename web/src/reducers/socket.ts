import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState = io(`https://server-socket-zrlh.onrender.com`);

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {},
});

export default socketSlice;
