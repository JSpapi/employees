import React, { useEffect } from "react";
import { FormBtn } from "../../components/ui/formBtn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useGetAllEmployeesQuery } from "../../services/employees.api";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const Home = () => {
  const { data, isLoading } = useGetAllEmployeesQuery();
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleUser = (id: string) => navigate(`/employee/${id}`);

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
          >
            <span style={{ color: "#fff", textTransform: "capitalize" }}>
              Добавить
            </span>
          </FormBtn>

          <TableContainer component={Paper} sx={{ marginTop: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Имя</TableCell>
                  <TableCell align="center">Возраст</TableCell>
                  <TableCell align="center">Адрес</TableCell>
                </TableRow>
              </TableHead>

              {data?.length ? (
                data?.map((row) => (
                  <TableBody key={row.id}>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                      }}
                      onClick={() => handleUser(row.id)}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.firstName}
                      </TableCell>
                      <TableCell align="center">{row.age}</TableCell>
                      <TableCell align="center">{row.address}</TableCell>
                    </TableRow>
                  </TableBody>
                ))
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Нет данных</TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};
