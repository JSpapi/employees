import { Typography } from "@mui/material";
import {
  Person as PersnIcon,
  Group as GroupIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FormBtn } from "../ui/formBtn";
import s from "./Index.module.css";
export const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.team}>
        <FormBtn startIcon={<GroupIcon />} color="inherit">
          <Typography variant="h5">Сотрудники</Typography>
        </FormBtn>
      </Link>

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
    </header>
  );
};
