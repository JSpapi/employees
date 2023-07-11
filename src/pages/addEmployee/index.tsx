import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "zod";
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

  const employeeSchema = object({
    firstName: string()
      .nonempty("Поле обязательно для заполнения")
      .min(2, "Имя должно состоять не меньше 2 символов")
      .max(32, "Имя должно состоять не больше 32 символов"),
    lastName: string()
      .nonempty("Поле обязательно для заполнения")
      .min(2, "Фамилия должно состоять не меньше 2 символов")
      .max(32, "Фамилия должно состоять не больше 32 символов"),
    age: string().nonempty("Поле обязательно для заполнения"),
    address: string().nonempty("Поле обязательно для заполнения"),
  });

  const methods = useForm<IEmplyee>({
    resolver: zodResolver(employeeSchema),
  });

  const { reset } = methods;

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  const onEditFormSubmit: SubmitHandler<IEmplyee> = async (data) => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      await addEmployee(data).unwrap();
      navigate("/");
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
      methods={methods}
      formSubmit={onEditFormSubmit}
      loading={loading}
      error={error}
    />
  );
};
