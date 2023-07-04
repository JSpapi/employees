import { useTypedSelector } from "./useTypedSelector";

export const useEmployees = () => {
  const employees = useTypedSelector((state) => state.employees.emplyees);
  return employees;
};
