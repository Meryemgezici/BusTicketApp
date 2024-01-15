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
  selectedChairCount: number;
}

const initialState: ChairsState = {
  chairs: [],
  isLoading: true,
  isError: false,
  selectedChairCount: 0,
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
    updateSelectedChairCount: (state, action: PayloadAction<number>) => {
      state.selectedChairCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChairs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getChairs.fulfilled, (state, action) => {
        state.chairs = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getChairs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("Üzgünüz, bir hata oluştu");
      });
  },
});

export default chairsSlice.reducer;
export const { updateChairs, updateSelectedChairCount } = chairsSlice.actions;
