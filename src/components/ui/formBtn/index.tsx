import React from "react";
import { LoadingButton } from "@mui/lab";
import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

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
  loading,
  // loadingPosition,
  // startIcon,
  onClcik,
}: IProps) => {
  return (
    <LoadingButton
      variant={variant}
      type={type}
      color={color}
      size={size}
      loading={loading}
      // loadingPosition={loadingPosition}
      // startIcon={startIcon}
      onClick={onClcik}
    >
      {children}
    </LoadingButton>
  );
};
