import { Delete, DriveFileRenameOutline } from "@mui/icons-material";
import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { CustomModal } from "../../components/modal";
import { ErrorMessage } from "../../components/ui/errorMessage";
import { useUser } from "../../hooks/useUser";
import {
  useGetEmployeeQuery,
  useRemoveEmployeeMutation,
} from "../../services/employees.api";
import { isErrorWithMessage } from "../../utils/IsErrorWithMessage";
import s from "./index.module.css";

export const Employee = () => {
  const [error, setError] = useState("");
  const [isModalOpan, setIsModalOpan] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetEmployeeQuery(id || "");

  const [removeEmployee] = useRemoveEmployeeMutation();
  const { user } = useUser();

  const openModal = () => setIsModalOpan(true);
  const closeModal = () => setIsModalOpan(false);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (!data) {
    return <Navigate to="/" />;
  }

  const handleDeleteUser = async () => {
    closeModal();
    try {
      await removeEmployee(data.id).unwrap();
      navigate("/status/deleted");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) setError(err.data.message);
      else setError("Не известная ошибка");
    }
  };

  return (
    <>
      <div className={s.employee}>
        <Card
          sx={{
            minWidth: "50%",
            borderRadius: "0px",
            border: "1px solid #393939",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 16, marginBottom: 1.5 }}
              color="text.secondary"
            >
              Имя
            </Typography>
            <Divider sx={{ marginBottom: 1.5 }} />
            <Typography
              sx={{ fontSize: 16, marginBottom: 1.5 }}
              color="text.secondary"
            >
              Возраст
            </Typography>
            <Divider sx={{ marginBottom: 1.5 }} />
            <Typography
              sx={{ fontSize: 16, marginBottom: 1.5 }}
              color="text.secondary"
            >
              Адрес
            </Typography>
            <Divider />
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: "50%",
            borderRadius: "0px",
            border: "1px solid #393939",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 16, marginBottom: 1.5 }}>
              {data?.firstName} {data?.lastName}
            </Typography>
            <Divider sx={{ marginBottom: 1.5 }} />
            <Typography sx={{ fontSize: 16, marginBottom: 1.5 }}>
              {data?.age}
            </Typography>
            <Divider sx={{ marginBottom: 1.5 }} />
            <Typography sx={{ fontSize: 16, marginBottom: 1.5 }}>
              {data?.address}
            </Typography>
            <Divider />
          </CardContent>
        </Card>
      </div>

      {user?.id === data?.userId && (
        <div className={s.employee_actions}>
          <Divider textAlign="left" sx={{ marginBottom: 2 }}>
            Действия
          </Divider>

          <Link to={`/employee/edit/${data.id}`}>
            <Button
              size="medium"
              variant="outlined"
              color="info"
              sx={{ borderRadius: "50px", marginRight: 1 }}
              startIcon={<DriveFileRenameOutline />}
            >
              <span style={{ textTransform: "capitalize" }}>Редактировать</span>
            </Button>
          </Link>
          <Button
            size="medium"
            variant="outlined"
            color="error"
            sx={{ borderRadius: "50px" }}
            startIcon={<Delete />}
            onClick={openModal}
          >
            <span style={{ textTransform: "capitalize" }}>Удалить</span>
          </Button>

          <ErrorMessage message={error} />

          <CustomModal
            closeModal={closeModal}
            isModalOpan={isModalOpan}
            handleUser={handleDeleteUser}
          />
        </div>
      )}
    </>
  );
};
