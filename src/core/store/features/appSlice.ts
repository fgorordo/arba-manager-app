import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppStatus = 'idle' | 'loading' | 'succeded' | 'failed';

interface AppInitialState {
    status: AppStatus,
    errorMessage: null | string;
    succededMessage: null | string;
    disableUserActions: boolean;
}

const initialState: AppInitialState = {
    status: 'idle',
    errorMessage: null,
    succededMessage: null,
    disableUserActions: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoadingStatus: (state) => {
        state.disableUserActions = true;
        state.status = 'loading';
    },

    setSuccededStatus: (state, {payload}: PayloadAction<string | null>) => {
        state.disableUserActions = false;
        state.status = 'succeded';
        state.succededMessage = payload;
    },

    setFailedStatus: (state, {payload}: PayloadAction<string | null>) => {
        state.disableUserActions = false;
        state.status = 'failed';
        state.succededMessage = payload;
    },

    setIdleStatus: (state) => {
        state.disableUserActions = false;
        state.errorMessage = null;
        state.succededMessage = null;
        state.status = 'idle';
    }
  }
});

export const { setLoadingStatus, setSuccededStatus,  setFailedStatus, setIdleStatus } = appSlice.actions;