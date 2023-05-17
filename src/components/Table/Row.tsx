import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PmUI } from "src/types/PokemonUI";
import { getTypeColor } from "src/utils/utils";
import { useMediaQuery, useTheme } from "@mui/material";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Row(props: { row: PmUI }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const avatarSize = isMobile ? 50 : 95;
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align='center'>{row.name}</TableCell>
        <TableCell align='center' sx={style} size='medium'>
          <Avatar
            sx={{
              width: avatarSize,
              height: avatarSize,
            }}
            src={row.img}
            alt={`${row.name} photo`}
          />
        </TableCell>
        <TableCell align='center'>
          <Stack justifyContent='center' direction='row' spacing={1}>
            {row.types.map((type) => (
              <Chip
                size='small'
                sx={{ backgroundColor: getTypeColor(type), color: "white" }}
                key={type}
                label={type}
              />
            ))}
          </Stack>
        </TableCell>
        <TableCell align='center'>
          {row.abilities.map((item) => (
            <Box key={item} sx={{ margin: 1 }}>
              {item}
            </Box>
          ))}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Details
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Height</TableCell>
                    <TableCell align='center'>Weight</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.id}>
                    <TableCell align='center'>{row.height}</TableCell>
                    <TableCell align='center'>{row.weight}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Row;
