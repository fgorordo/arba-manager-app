import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILote } from '../interfaces';

interface LotesSliceInitialState {
    lotes: ILote[];
    activeLoteId: string | undefined;
}

const initialState: LotesSliceInitialState = {
    lotes: [],
    activeLoteId: undefined,
}

export const lotesSlice = createSlice({
  name: 'lotes',
  initialState,
  reducers: {
    createLote: (state, {payload}: PayloadAction<ILote>) => {
      state.lotes = [...state.lotes, payload];
    },
    loadInitalLotesData: (state, {payload}: PayloadAction<ILote[]>) => {
      state.lotes = payload;
    },
    setActiveLote: (state, {payload}: PayloadAction<string>) => {
      state.activeLoteId = payload;
    },
  }
});

export const {createLote, loadInitalLotesData,setActiveLote} = lotesSlice.actions