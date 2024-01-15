import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getChairs } from "../actions/chairsAction";

export interface Chair {
  id: number;
  occupancyStatus: string;
  gender: string;
  color: string;
}

interface ChairsState {
  chairs: Chair[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ChairsState = {
  chairs: [],
  isLoading: true,
  isError: false,
};

const chairsSlice = createSlice({
  name: "chairs",
  initialState,
  reducers: {
    updateChairs: (state, action: PayloadAction<Chair[]>) => {
      state.chairs = action.payload;
      state.isLoading = false;
      state.isError = false;
      
    },
  },
  extraReducers: (builder) => {
    // Cevap beklerken
    builder
      .addCase(getChairs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      // Olumlu cevap geldiğinde
      .addCase(getChairs.fulfilled, (state, action) => {
        state.chairs = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      // Olumsuz cevap geldiğinde
      .addCase(getChairs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("Üzgünüz, bir hata oluştu");
      });
  },
});

export default chairsSlice.reducer;
export const { updateChairs } = chairsSlice.actions;