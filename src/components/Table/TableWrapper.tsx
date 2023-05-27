import { Alert, Skeleton, Stack } from "@mui/material";
import { FC } from "react";
import TableContent from "./TableContent";
import useListLogic from "src/hooks/useTableContainerLogic";
import ErrorWrapper from "../ErrorHandling/ErrorWrapper";

const TableWrapper: FC = () => {
  const { isLoading, error } = useListLogic();
  return (
    <ErrorWrapper error={error}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!isLoading ? <TableContent /> : <Loader />}
      </div>
    </ErrorWrapper>
  );
};
export default TableWrapper;

function Loader() {
  return (
    <Stack direction='column' width='100%' spacing={2}>
      <Skeleton animation='wave' width='100%' height='5em' />
      <Skeleton animation='wave' width='100%' height='5em' />
      <Skeleton animation='wave' width='100%' height='5em' />
    </Stack>
  );
}
