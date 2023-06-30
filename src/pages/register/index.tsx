import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../../components/ui/formInput";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
export const Register = () => {
  const [loading, setLoading] = useState(false);

  const schema = object({
    name: string()
      .nonempty("Поле обязательно для заполнения")
      .min(2, "Имя должно состоять не меньше 2 символов")
      .max(32, "Имя должно состоять не больше 32 символов"),
    email: string()
      .nonempty("Поле обязательно для заполнения")
      .email("электронная почта недействительна"),
    password: string()
      .nonempty("Поле обязательно для заполнения")
      .min(4, "Пароль должен состоять не меньше 4 символов")
      .max(32, "Пароль должен состоять не больше 32 символов"),
    passwordConfirm: string().nonempty("Пожалуйста, подтвердите свой пароль"),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Пароли не совпадают",
  });

  type RegisterInput = TypeOf<typeof schema>;

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onFormSubmit: SubmitHandler<RegisterInput> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(data);
    }, 2000);
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__header">
          <Typography variant="body2">Зарегестрируйтесь</Typography>
        </div>
        <FormProvider {...methods}>
          <form className="login__form" onSubmit={handleSubmit(onFormSubmit)}>
            <FormInput
              name="name"
              label="Имя"
              size="small"
              margin="dense"
              fullWidth
            />
            <FormInput
              name="email"
              label="Email"
              size="small"
              margin="dense"
              fullWidth
            />
            <FormInput
              name="password"
              label="Пароль"
              type="password"
              size="small"
              margin="dense"
              fullWidth
            />
            <FormInput
              name="passwordConfirm"
              label="Повторите пароль"
              type="password"
              size="small"
              margin="dense"
              fullWidth
              sx={{ marginBottom: 2 }}
            />

            <LoadingButton
              type="submit"
              color="secondary"
              size="small"
              loading={loading}
              variant="contained"
              sx={{ marginBottom: 2 }}
            >
              <span style={{ color: "#fff", textTransform: "capitalize" }}>
                Зарегестрироваться
              </span>
            </LoadingButton>
            <Typography variant="caption" display="block">
              Уже зарегистрированы?{" "}
              <Link
                to="/login"
                style={{
                  color: "#1976d2",
                  borderBottom: "0.5px solid #1976d2",
                  marginLeft: 5,
                }}
              >
                Войдите
              </Link>
            </Typography>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
