import {
  Chip,
  TextField,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  InputAdornment,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useFiltersLogic from "src/hooks/useFiltersLogic";
import { getTypeColor } from "src/utils/utils";
import "./HeaderFilters.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const HeaderFilters: FC = () => {
  const {
    handleChangeSelect,
    handleChangeInput,
    allTypes,
    selectedTypes,
    isTypesArray,
  } = useFiltersLogic();
  return (
    <Box>
      <Stack direction='column' spacing={2}>
        <Box className='filter1'>
          <InputLabel id='demo-multiple-chip-label'>Search by name</InputLabel>
          <TextField
            onChange={handleChangeInput}
            variant='outlined'
            placeholder='Pikachu'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            inputProps={{ "aria-label": "search by name" }}
          />
        </Box>
        <Box className='filter2'>
          <InputLabel id='demo-multiple-chip-label'>Select by type</InputLabel>
          <Select
            labelId='demo-multiple-chip-label'
            id='demo-multiple-chip'
            multiple
            value={selectedTypes}
            onChange={handleChangeSelect}
            input={
              <OutlinedInput id='select-multiple-chip' label='Select by type' />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip
                    key={value}
                    label={value}
                    sx={{
                      backgroundColor: getTypeColor(value),
                      color: "white",
                    }}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
            sx={{ width: "100%" }}
          >
            {isTypesArray &&
              allTypes?.map(({ name }) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </Box>
      </Stack>
    </Box>
  );
};
export default HeaderFilters;
