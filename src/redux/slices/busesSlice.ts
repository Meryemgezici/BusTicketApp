import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getBuses } from "../actions/busesAction";

export interface Bus {
  id: number;
  departure: string;
  destination: string;
  date: string;
  price: number;
  emptySeats: number;
  departureTime: string;
  travelTime: string;
  logo: string;
}

interface BusesState {
  buses: Bus[];
  isLoading: boolean;
  isError: boolean;
  filteredBuses: Bus[];
  selectedBus: Bus[];
}

const initialState: BusesState = {
  buses: [],
  isLoading: true,
  isError: false,
  filteredBuses: [],
  selectedBus: [],
};

const busesSlice = createSlice({
  name: "buses",
  initialState,
  reducers: {
    filterBuses: (
      state,
      action: PayloadAction<{
        departure: string | null;
        destination: string | null;
        date: string | null;
      }>
    ) => {
      const { departure, destination, date } = action.payload;

      state.filteredBuses = state.buses.filter((bus) => {
        return (
          bus.departure.toLowerCase() === departure?.toLowerCase() &&
          bus.destination.toLowerCase() === destination?.toLowerCase() &&
          bus.date === date
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBuses.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getBuses.fulfilled, (state, action) => {
        state.buses = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getBuses.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("Üzgünüz, bir hata oluştu");
      });
  },
});

export default busesSlice.reducer;
export const { filterBuses } = busesSlice.actions;
