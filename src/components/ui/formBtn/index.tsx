import { Button } from "@mui/material";
import React from "react";
interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClcik?: () => void;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  size?: "small" | "medium" | "large" | undefined;
  variant?: "text" | "contained" | "outlined" | undefined;
  loading?: boolean;
  loadingPosition?: "center" | "start" | "end" | undefined;
  startIcon?: React.ReactNode;
}

export const FormBtn = ({
  children,
  type,
  color,
  size,
  variant,
  startIcon,
  onClcik,
}: IProps) => {
  return (
    <Button
      variant={variant}
      type={type}
      color={color}
      size={size}
      startIcon={startIcon}
      onClick={onClcik}
    >
      {children}
    </Button>
  );
};
