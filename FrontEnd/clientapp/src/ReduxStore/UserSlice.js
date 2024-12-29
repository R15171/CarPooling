import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null, // To store logged-in user data
  };
const logsate={
  login: false, // To store login status
}
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, action) => {
        state.userInfo = action.payload; // Set user info
        state.logsate.login = true;
      },
      logout: (state) => {
        state.userInfo = null; // Clear user info
        state.logsate.login = false;
      },
    },
  });

  export const { login, logout } = userSlice.actions;

export default userSlice.reducer;