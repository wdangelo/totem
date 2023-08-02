import { configureStore, createSlice } from '@reduxjs/toolkit';

//Slice
export interface AppState {
    number: number
}

const initialState: AppState = {
    number: 1
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      incrementNumber: (state) => {
        state.number += 1;
      },
    },
  });

export const { incrementNumber } = appSlice.actions

const rootReducer = appSlice.reducer;

const store = configureStore({
    reducer: rootReducer
})

export default store