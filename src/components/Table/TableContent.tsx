import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import useTableLogic from "src/hooks/useTableLogic";
import { PmUI } from "src/types/PokemonUI";
import Row from "./Row";

const TableContent: FC = () => {
  const {
    handlePageChange,
    handlePageSizeChange,
    pmsOnPage,
    page,
    perPage,
    totalCount,
    paddingValue,
  } = useTableLogic();

  return (
    <TableContainer component={Paper}>
      <Table padding={paddingValue} aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Avatar</TableCell>
            <TableCell align='center'>Type</TableCell>
            <TableCell align='center'>Species</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pmsOnPage.map((row: PmUI) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component='div'
        count={totalCount}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={perPage}
        onRowsPerPageChange={handlePageSizeChange}
      />
    </TableContainer>
  );
};
export default TableContent;
