import { createSlice } from "@reduxjs/toolkit";

const initialState = { studentsType: "counsellor" };

const counsellorStudentsTypeSlice = createSlice({
  name: "counsellorStudentsType",
  initialState,
  reducers: {
    setCounsellor(state, action) {
      state.studentsType = "counsellor";
    },
    setPartner(state, action) {
      state.studentsType = "partner";
    },
  },
});

export const { setCounsellor, setPartner } =
  counsellorStudentsTypeSlice.actions;
export default counsellorStudentsTypeSlice.reducer;
