import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppStatus = 'idle' | 'loading' | 'succeded' | 'failed';

interface AppInitialState {
    status: AppStatus,
    errorMessage: null | string;
    succededMessage: null | string;
}

const initialState: AppInitialState = {
    status: 'idle',
    errorMessage: null,
    succededMessage: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppStatus: (state, {payload}:PayloadAction<AppStatus>) => {
        state.status = payload
    },
    setErrorMessage: (state, {payload}: PayloadAction<string>) => {
        state.errorMessage = payload;
    },
    setSuccededMessage: (state, {payload}: PayloadAction<string>) => {
        state.succededMessage = payload;
    },
    clearMessages: (state) => {
        state.errorMessage = null;
        state.succededMessage = null;
    }
  }
});

export const { setAppStatus, setErrorMessage, setSuccededMessage, clearMessages } = appSlice.actions;