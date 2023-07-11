import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { IEmplyee } from "../../types/employees.type";

import { ErrorMessage } from "../ui/errorMessage";
import { FormInput } from "../ui/formInput";

interface IProps<T> {
  title: string;
  methods: UseFormReturn<T>;
  btnText: string;
  error?: string;
  loading?: boolean;
  formSubmit: SubmitHandler<T>;
}

export const EmployeeForm = ({
  title,
  methods,
  btnText,
  error,
  loading,
  formSubmit,
}: IProps<IEmplyee>) => {
  const { handleSubmit } = methods;

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
            />
            <FormInput
              name="lastName"
              label="Фамилия"
              size="small"
              margin="dense"
              fullWidth
              variant="filled"
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
