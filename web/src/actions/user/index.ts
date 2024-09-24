import { loginAPI, registerAPI } from "@/apis/userAPIs";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type FormLoginData = {
  email: string;
  password: string;
};

export type FormRegisterData = {
  name: string;
  email: string;
  password: string;
  emailAgain: string;
};

export const loginUserRequest = createAsyncThunk(
  "user/login",
  async (
    {
      data,
      callback,
    }: { data: FormLoginData; callback: (result: any) => void },
    thunkAPI
  ) => {
    try {
      const result = await loginAPI(data);
      callback?.(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUserRequest = createAsyncThunk(
  "user/register",
  async (
    {
      data,
      callback,
    }: { data: FormRegisterData; callback: (result: any) => void },
    thunkAPI
  ) => {
    try {
      const result = await registerAPI(data);
      callback?.(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
