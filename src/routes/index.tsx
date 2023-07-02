import { AddEmployee } from "../pages/addEmployee";
import { EditEmployee } from "../pages/editEmployee";
import { Employee } from "../pages/employee";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Status } from "../pages/status";

export const routes = [
  { id: "employeeAdd", path: "/employee/add", element: <AddEmployee /> },
  { id: "employeeEdit", path: "/employee/edit", element: <EditEmployee /> },
  { id: "employee", path: "/employee/:id", element: <Employee /> },
  { id: "status", path: "/status", element: <Status /> },
  { id: "login", path: "/login", element: <Login /> },
  { id: "register", path: "/register", element: <Register /> },
] as const;
