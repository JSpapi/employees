import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EmployeeForm } from "../../components/employeeForm";
import { isErrorWithMessage } from "../../utils/IsErrorWithMessage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useAddEmployeeMutation } from "../../services/employees.api";
import { IEmplyee } from "../../types/employees.type";

export const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [addEmployee] = useAddEmployeeMutation();

  const { user } = useUser();

  const { reset } = useForm();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  const onAddFormSubmit: SubmitHandler<IEmplyee> = async (data) => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      await addEmployee(data).unwrap();
      navigate("/status/created");
      reset();
    } catch (err) {
      const maybeError = isErrorWithMessage(err);
      reset();
      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <EmployeeForm
      btnText="Добавить"
      title="Добавить сотрудника"
      formSubmit={onAddFormSubmit}
      loading={loading}
      error={error}
    />
  );
};
