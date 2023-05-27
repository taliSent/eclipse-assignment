import { Alert } from "@mui/material";
import { FC, ReactElement } from "react";
import ErrorMessage from "./ErrorMessage";

type ErrorWrapperT = {
  children: ReactElement;
  error?: string;
};

const ErrorWrapper: FC<ErrorWrapperT> = ({ children, error }) => {
  return <>{error ? <ErrorMessage error={error} /> : <div>{children}</div>}</>;
};
export default ErrorWrapper;
