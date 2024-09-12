import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState = {
  Authorization: "None",
};

if (localStorage.getItem("user")) {
  const token = localStorage.getItem("user");
  if (token) {
    initialState = { Authorization: localStorage.getItem("user") };
  }
}

const headersSlice = createSlice({
  name: "headers",
  initialState,
  reducers: {
    updatData: (
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
