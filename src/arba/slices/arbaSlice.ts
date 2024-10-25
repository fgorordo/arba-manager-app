import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ILote {
    nombreParcela: string;
    nombrePropietario: string;
    numeroPartida: string;
    tipoPlanta: string;
    baseImponible: number;
    superficie: number;
    superficieEdificada: number;
    circ?: string;
    seccion?: string;
    chacra?: string;
    quinta?: string;
    manzana?: string;
    fraccion?: string;
    parcela?: string;
    subParcela?: string;
}


export interface ArbaState {
  lotes: ILote[]
}

const initialState: ArbaState = {
  lotes: [],
}

export const arbaSlice = createSlice({
  name: 'arba',
  initialState,
  reducers: {
    createNewLote(state, {payload}: PayloadAction<ILote>) {
      state.lotes = [...state.lotes, payload];
    },
    loadLotesInitialData(state, {payload}: PayloadAction<ILote[]>) {
      state.lotes = payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { createNewLote, loadLotesInitialData } = arbaSlice.actions

export default arbaSlice.reducer