import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from 'store/auth/types';

const initialState: AuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    changeAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    }
  }
});

export const { changeAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
