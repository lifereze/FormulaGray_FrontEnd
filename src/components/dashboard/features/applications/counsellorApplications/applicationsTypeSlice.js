import { createSlice } from "@reduxjs/toolkit";

const initialState = { applicationsType: "counsellor" };

const counsellorApplicationsTypeSlice = createSlice({
  name: "counsellorApplicationsType",
  initialState,
  reducers: {
    setCounsellor(state, action) {
      state.applicationsType = "counsellor";
    },
    setPartner(state, action) {
      state.applicationsType = "partner";
    },
  },
});

export const { setCounsellor, setPartner } =
  counsellorApplicationsTypeSlice.actions;
export default counsellorApplicationsTypeSlice.reducer;
