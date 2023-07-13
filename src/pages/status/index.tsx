import { NavLink, useParams } from "react-router-dom";
import createdImg from "../../assets/gimme.gif";
import errorImg from "../../assets/bugcat.gif";
import deletedImg from "../../assets/error.gif";
import { FormBtn } from "../../components/ui/formBtn";
import { Typography } from "@mui/material";
import s from "./index.module.css";

const statuses: Record<string, string> = {
  created: "Пользователь успешно создан",
  updated: "Пользователь успешно обнавлен",
  deleted: "Пользователь успешно удален",
};

export const Status = () => {
  const { result } = useParams();

  return (
    <div className={s.status}>
      <img
        src={
          result === "created" || result === "updated"
            ? createdImg
            : result === "deleted"
            ? deletedImg
            : errorImg
        }
        alt="status"
      />

      <Typography variant="h5" gutterBottom>
        {result ? statuses[result] : "ничего не найдено"}
      </Typography>

      <FormBtn color="success" size="small" variant="contained">
        <NavLink
          to="/"
          style={{ color: "#fff", textTransform: "capitalize", fontSize: 18 }}
        >
          На главную
        </NavLink>
      </FormBtn>
    </div>
  );
};
