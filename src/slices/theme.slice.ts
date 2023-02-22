import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  color: 'light' | 'dark';
}

const initialState: CounterState = {
  color: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.color = state.color === 'light' ? 'dark' : 'light'
    },
  },
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;