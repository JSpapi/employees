import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "zod";
import { IEmplyee } from "../../types/employees.type";

import { ErrorMessage } from "../ui/errorMessage";
import { FormInput } from "../ui/formInput";

interface IProps<T> {
  title: string;
  btnText: string;
  error?: string;
  loading?: boolean;
  formSubmit: SubmitHandler<T>;
  data?: IEmplyee;
}

export const EmployeeForm = ({
  title,
  btnText,
  error,
  loading,
  formSubmit,
  data,
}: IProps<IEmplyee>) => {
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
    defaultValues: {
      ...data,
    },
  });

  const { handleSubmit } = methods;
  console.log(data);

  return (
    <div className="edit">
      <div className="edit__content">
        <div className="edit__header">
          <Typography variant="h5">{title}</Typography>
        </div>
        <FormProvider {...methods}>
          <form className="edit__form" onSubmit={handleSubmit(formSubmit)}>
            <FormInput
              name="firstName"
              label="Имя"
              size="small"
              margin="dense"
              fullWidth
              variant="filled"
              value={data?.firstName}
            />
            <FormInput
              name="lastName"
              label="Фамилия"
              size="small"
              margin="dense"
              fullWidth
              variant="filled"
              value={data?.firstName}
            />
            <FormInput
              name="age"
              label="Возраст"
              placeholder="Только числа"
              size="small"
              margin="dense"
              fullWidth
              type="number"
              variant="filled"
              value={data?.firstName}
            />
            <FormInput
              name="address"
              label="Адрес"
              size="small"
              margin="dense"
              fullWidth
              variant="filled"
              sx={{ marginBottom: 3 }}
            />

            <div>
              <LoadingButton
                type="submit"
                color="info"
                size="small"
                loading={loading}
                variant="contained"
                sx={{ marginBottom: 2 }}
              >
                <span style={{ color: "#fff", textTransform: "capitalize" }}>
                  {btnText}
                </span>
              </LoadingButton>
            </div>
            <ErrorMessage message={error} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
