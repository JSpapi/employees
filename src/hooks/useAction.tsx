import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as authActions } from "../features/auth/auth.slice";
import { actions as employeesActions } from "../features/emplyees/employees.slice";

const rootActions = {
  ...authActions,
  ...employeesActions,
};

export const useAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
