import { useCurrentQuery } from "../../services/auth.api";

export const AuthLoading = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <span>Загрузка...</span>;
  }
  return children;
};
