import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    uid: '',
    name: '',
    email: '',
    contact: '',
    address: '',
    gender: '',
    dob: '',
    roles: [],  // Should be an array to store multiple roles
  },
  logstate: {   // Should be part of the state
    login: false,  // To store login status
  }
  // availablerides:{
  //   rides:[]
  // }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;  // Set user info
      state.logstate.login = true;        // Update login status
    },
    logout: (state) => {
      state.userInfo = {};  // Clear user info
      state.logstate.login = false;  // Update login status
      //state.availablerides.rides=[];
    },
    // addride: (state, action) => {
    //   state.availablerides=action.payload;
    //   },
  },
});

export const { login, logout//,addride
} = userSlice.actions;

export default userSlice.reducer;
