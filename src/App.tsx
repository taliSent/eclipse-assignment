import { Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { FC } from "react";
import HeaderFilters from "./components/HeaderFilters/HeaderFilters";
import TableWrapper from "./components/Table/TableWrapper";
import useAppLogic from "./hooks/useAppLogic";
import "./App.css";

const App: FC = () => {
  const logic = useAppLogic();

  return (
    <Container maxWidth='md' sx={{ padding: "3em 1em" }}>
      <Stack direction='column' spacing={3}>
        <Typography className='header' variant='h2' component='h1'>
          Pokemons
        </Typography>
        <HeaderFilters />
        <TableWrapper />
      </Stack>
    </Container>
  );
};

export default App;
