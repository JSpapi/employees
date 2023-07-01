import { useTypedSelector } from "./useTypedSelector";

export const useUser = () => {
  const { employees } = useTypedSelector((state) => state.employees);
  return { employees };
};
