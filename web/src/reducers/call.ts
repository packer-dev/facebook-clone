import { Group } from "@/interfaces/Group";
import { User } from "@/interfaces/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Peer from "peerjs";

export type CallProps = {
  current: User | null;
  mode: "group" | "single" | "offline";
  group: Group;
  acceptUser: User[];
  status: "caller" | "callee" | "";
  peer: Peer | null;
  localStream: MediaStream;
  remoteStream: MediaStream[];
};

const initialState: CallProps = {
  current: null,
  group: null,
  mode: "offline",
  acceptUser: [],
  status: "",
  peer: null,
  localStream: null,
  remoteStream: [],
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    updateDataCall: (
      state: CallProps,
      action: PayloadAction<{
        key: keyof CallProps;
        value: any;
      }>
    ) => {
      state[action.payload.key as string] = action.payload.value;
    },
  },
});

export const { updateDataCall } = callSlice.actions;

export default callSlice;
