import { Alert } from "@mui/material";

interface IProps {
  message?: string;
}

export const ErrorMessage = ({ message }: IProps) => {
  if (!message) return null;

  return <Alert severity="error">{message}</Alert>;
};
