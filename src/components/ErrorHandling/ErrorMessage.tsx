import { Alert } from "@mui/material";

type ErrorMessageT = {
  error?: string;
};

const ErrorMessage = ({ error }: ErrorMessageT) => {
  return <Alert severity='error'>{error}</Alert>;
};

export default ErrorMessage;
