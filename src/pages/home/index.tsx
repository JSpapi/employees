import { useEffect } from "react";
import { FormBtn } from "../../components/ui/formBtn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useGetAllEmployeesQuery } from "../../services/employees.api";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { EmployeesTable } from "../../components/employeesTable";

export const Home = () => {
  const { data, isLoading } = useGetAllEmployeesQuery();
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const goToAddUserPage = () => navigate("/employee/add");

  return (
    <div>
      {isLoading ? (
        <p>Загрузка данных...</p>
      ) : (
        <>
          <FormBtn
            type="button"
            color="info"
            variant="contained"
            size="small"
            startIcon={<AddCircleOutlineIcon />}
            onClcik={goToAddUserPage}
          >
            <span style={{ color: "#fff", textTransform: "capitalize" }}>
              Добавить
            </span>
          </FormBtn>
          <EmployeesTable employees={data} />
        </>
      )}
    </div>
  );
};
