import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { reducer as authReducer } from "./features/auth/auth.slice";
import { reducer as employeesReducer } from "./features/emplyees/employees.slice";
import { listenerMiddleware } from "./middleware/authToken";
import { api } from "./services/api";

const reducers = combineReducers({
  auth: authReducer,
  employees: employeesReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
