import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBuses = createAsyncThunk("getBuses", async () => {
  try {
    const res = await axios.get("http://localhost:3040/buses");
    return res.data;
  } catch (error) {
    console.error("Error fetching buses:", error);
    throw error;
  }
});
