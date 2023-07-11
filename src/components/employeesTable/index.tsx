import React from "react";
import { IEmplyee } from "../../types/employees.type";
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
interface IProps {
  employees?: IEmplyee[];
}

export const EmployeesTable = ({ employees }: IProps) => {
  const navigate = useNavigate();

  const goToEmployeeInfoPage = (id: string) => navigate(`/employee/${id}`);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Имя</TableCell>
            <TableCell align="center">Возраст</TableCell>
            <TableCell align="center">Адрес</TableCell>
          </TableRow>
        </TableHead>

        {employees?.length ? (
          employees?.map((row) => (
            <TableBody key={row.id}>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                onClick={() => goToEmployeeInfoPage(row.id)}
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
  );
};
