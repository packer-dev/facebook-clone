import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState = {
  Authorization: "None",
};

if (localStorage.getItem("token")) {
  const token = localStorage.getItem("token");
  if (token) {
    initialState = { Authorization: localStorage.getItem("token") };
  }
}

const headersSlice = createSlice({
  name: "headers",
  initialState,
  reducers: {
    updateData: (
      state: any,
      action: PayloadAction<{
        key: any;
        value: any;
      }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export default headersSlice;
