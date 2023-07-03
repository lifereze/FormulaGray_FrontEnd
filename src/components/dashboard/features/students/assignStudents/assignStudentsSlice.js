import { createSlice } from "@reduxjs/toolkit";

const initialState = { assignedStudents: [] };

const assignStudentsSlice = createSlice({
  name: "assignedStudents",
  initialState,
  reducers: {
    addAssignedStudents(state, action) {
      if (state.assignedStudents.includes(action.payload)) {
        const index = state.assignedStudents.indexOf(action.payload);
        state.assignedStudents.splice(index, 1);
      } else {
        state.assignedStudents.push(action.payload);
      }
    },
  },
});

export const { addAssignedStudents } = assignStudentsSlice.actions;
export default assignStudentsSlice.reducer;
