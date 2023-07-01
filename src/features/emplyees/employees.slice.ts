import { createSlice } from "@reduxjs/toolkit";
import { employeesApi } from "../../services/employees.api";
import { IEmplyee } from "../../types/employees.type";

interface IInitialState {
  emplyees: IEmplyee[] | null;
}

const initialState: IInitialState = {
  emplyees: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      employeesApi.endpoints.getAllEmployees.matchFulfilled,
      (state, { payload }) => {
        state.emplyees = payload;
      }
    );
  },
});

export const { actions, reducer } = employeesSlice;
