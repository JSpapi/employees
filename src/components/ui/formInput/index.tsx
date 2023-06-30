import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type props = {
  name: string;
} & TextFieldProps;

export const FormInput = ({ name, ...otherProps }: props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputText = {
    color: "#737070",
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...otherProps}
          {...field}
          error={!!errors[name]?.message}
          helperText={errors[name] ? errors[name]?.message : null}
        />
      )}
    />
  );
};
