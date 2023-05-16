import { Alert, Skeleton, Stack } from "@mui/material";
import { FC } from "react";
import useTableContainerLogic from "src/hooks/useTableContainerLogic";
import TableContent from "./TableContent";

const TableWrapper: FC = () => {
  const { isLoading, error } = useTableContainerLogic();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isLoading && !error ? (
          <Stack direction='column' width='100%' spacing={2}>
            <Skeleton animation='wave' width='100%' height='5em' />
            <Skeleton animation='wave' width='100%' height='5em' />
            <Skeleton animation='wave' width='100%' height='5em' />
          </Stack>
        ) : (
          <TableContent />
        )}
      </div>
      {error && <Alert severity='error'>{error}</Alert>}
    </>
  );
};
export default TableWrapper;
