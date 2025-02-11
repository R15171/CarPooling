import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const initialState = {
  userInfo: storedUser ? JSON.parse(storedUser) : {   
    uid: "",
    name: "",
    email: "",
    contactno: "",
    address: "",
    gender: "",
    dob: "",
    role: null,
    password: "",
  },
  logstate: {
    login: !!storedToken, 
    token: storedToken || null,  
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload.user;
      state.logstate.login = true;
      state.logstate.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.userInfo = {};
      state.logstate.login = false;
      state.logstate.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
