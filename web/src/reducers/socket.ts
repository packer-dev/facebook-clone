import { createSlice } from "@reduxjs/toolkit";

const initialState: any = () => ({ on: () => {}, emit: () => {} });

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {},
});
export default socketSlice;
