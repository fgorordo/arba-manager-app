import { Parcela } from '@/core/models/parcela.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';





const initialState: Parcela[] = [];

export const parcelaSlice = createSlice({
  name: 'parcelas',
  initialState,
  reducers: {
    setInitialState: (state, {payload}: PayloadAction<Parcela[]>) => {
      return [...payload];
    }
  },
});

export const {setInitialState} = parcelaSlice.actions