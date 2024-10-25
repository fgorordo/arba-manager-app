import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ILoteUI {
    activeDetail: string | undefined
}


export interface IUiState {
  lotes: ILoteUI
}

const initialState: IUiState = {
  lotes: {activeDetail: undefined},
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveLoteDescription: (state, {payload}: PayloadAction<string>) => {
        state.lotes.activeDetail = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setActiveLoteDescription } = uiSlice.actions

export default uiSlice.reducer