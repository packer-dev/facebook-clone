import { SERVER_NODE } from "@/constants/Config";
import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState = io(SERVER_NODE);

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {},
});

export default socketSlice;
