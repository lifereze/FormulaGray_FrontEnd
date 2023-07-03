import { createSlice } from "@reduxjs/toolkit";

const initialState = { assignedPartners: [] };

const assignPartnersSlice = createSlice({
  name: "assignedPartners",
  initialState,
  reducers: {
    addAssignedPartners(state, action) {
      if (state.assignedPartners.includes(action.payload)) {
        const index = state.assignedPartners.indexOf(action.payload);
        state.assignedPartners.splice(index, 1);
      } else {
        state.assignedPartners.push(action.payload);
      }
    },
  },
});

export const { addAssignedPartners } = assignPartnersSlice.actions;
export default assignPartnersSlice.reducer;
