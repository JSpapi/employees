import { useTypedSelector } from "./useTypedSelector";

export const useUser = () => {
  const { user } = useTypedSelector((state) => state.auth);
  return { user };
};
