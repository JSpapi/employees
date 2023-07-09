import { Typography } from "@mui/material";
import {
  Person as PersnIcon,
  Group as GroupIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { FormBtn } from "../ui/formBtn";
import s from "./Index.module.css";
import { useUser } from "../../hooks/useUser";
import { useAction } from "../../hooks/useAction";
export const Header = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { AuthLogout } = useAction();
  const handleLogOut = () => {
    AuthLogout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className={s.header}>
      <Link to="/">
        <FormBtn startIcon={<GroupIcon />} color="inherit">
          <Typography variant="h5">Сотрудники</Typography>
        </FormBtn>
      </Link>

      {user ? (
        <FormBtn
          startIcon={<LogoutIcon />}
          color="inherit"
          size="small"
          onClcik={handleLogOut}
        >
          Выйти
        </FormBtn>
      ) : (
        <div className="">
          <Link to="/register">
            <FormBtn startIcon={<PersnIcon />} color="inherit" size="small">
              Зарегестрироваться
            </FormBtn>
          </Link>
          <Link to="/login" style={{ marginLeft: 20 }}>
            <FormBtn startIcon={<LoginIcon />} color={"inherit"} size="small">
              Войти
            </FormBtn>
          </Link>
        </div>
      )}
    </header>
  );
};
