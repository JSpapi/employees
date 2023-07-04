import { useCurrentQuery } from "../../services/auth.api";
import loadingImg from "../../assets/preloader1.svg";
export const AuthLoading = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={loadingImg} alt="loading" />
      </div>
    );
  }
  return children;
};
