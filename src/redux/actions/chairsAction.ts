import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getChairs = createAsyncThunk("getChairs", async () => {
  try {
    const res = await axios.get("http://localhost:3040/chairs");
    return res.data;
  } catch (error) {
    console.error("Error fetching chairs:", error);
    throw error;
  }
});
