import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentFeesList: [],
  loading: false,
  error: null,
  response: null,
  statestatus: "idle",
};

const studentFeesSlice = createSlice({
  name: "studentFees",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
    },
    stuffDone: (state) => {
      state.loading = false;
      state.error = null;
      state.response = null;
      state.statestatus = "added";
    },
    getSuccess: (state, action) => {
      state.studentFeesList = action.payload;
      state.loading = false;
      state.error = null;
      state.response = null;
    },
    getFailed: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = null;
    },
    getError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    underStudentControl: (state) => {
      state.loading = false;
      state.response = null;
      state.error = null;
      state.statestatus = "idle";
    },
  },
});

export const {
  getRequest,
  getSuccess,
  getFailed,
  getError,
  underStudentControl,
  stuffDone,
} = studentFeesSlice.actions;

export const studentFeesReducer = studentFeesSlice.reducer;
