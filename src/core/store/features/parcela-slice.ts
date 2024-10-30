import { Parcela } from '@/core/models/parcela.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface ParcelasInitialState {
  parcelas: Parcela[];
  activeParcela: Parcela | undefined;
}

const initialState: ParcelasInitialState = {
  parcelas: [],
  activeParcela: undefined
};

export const parcelaSlice = createSlice({
  name: 'parcelas',
  initialState,
  reducers: {
    setInitialState: (state, {payload}: PayloadAction<Parcela[]>) => {
      state.parcelas = payload;
    },

    setActiveParcela: (state, {payload}: PayloadAction<number>) => {
      state.activeParcela = state.parcelas.find(item => item.id === payload)
    }
  },
});

export const {setInitialState, setActiveParcela} = parcelaSlice.actions