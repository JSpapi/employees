import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeForm } from "../../components/employeeForm";
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../../services/employees.api";
import { IEmplyee } from "../../types/employees.type";
import { isErrorWithMessage } from "../../utils/IsErrorWithMessage";
export const EditEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useGetEmployeeQuery(id || "");
  const [editEmployee] = useEditEmployeeMutation();

  const { reset } = useForm();

  const onEditFormSubmit: SubmitHandler<IEmplyee> = async (newEmployee) => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      const editedEmployee = {
        ...data,
        ...newEmployee,
      };
      await editEmployee(editedEmployee).unwrap();

      navigate("/status/updated");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);
      reset();
      if (maybeError) setError(err.data.message);
      else setError("Неизвестная ошибка");
    }
  };

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <EmployeeForm
      btnText="Редактировать"
      title="Редактировать сотрудника"
      formSubmit={onEditFormSubmit}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
