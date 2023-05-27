import { createReducer, createSlice } from "@reduxjs/toolkit";
import { FIRST_PAGE, INITIAL_PAGE_SIZE, TOTAL_ROWS } from "src/constants";
import { Pagination } from "src/types/Pagination";
import { PmUI } from "../types/PokemonUI";
import {
  changePage,
  changePageSize,
  filterByName,
  filterByType,
} from "./actions";
import { fetchAllPms } from "src/middleware/thunks";

type PmListT = {
  search: { byName: string; byTypes: string[] };
  pagination: Pagination;
};

const initial: PmListT = {
  search: { byName: "", byTypes: [] },
  pagination: {
    page: FIRST_PAGE,
    perPage: INITIAL_PAGE_SIZE,
  },
};

export const pmListReducer = createReducer(initial, (builder) => {
  builder
    .addCase(filterByName, (state, action) => {
      state.pagination.page = 0;
      state.search.byName = action.payload;
    })
    .addCase(filterByType, (state, action) => {
      state.pagination.page = 0;
      state.search.byTypes = action.payload;
    })
    .addCase(changePage, (state, action) => {
      state.pagination.page = action.payload;
    })
    .addCase(changePageSize, (state, action) => {
      state.pagination.page = 0;
      state.pagination.perPage = action.payload;
    });
});

type PmsFetchState = {
  pmsUI: PmUI[];
  isLoading: boolean;
  error?: string;
};

const initialState = {
  pmsUI: [],
  isLoading: false,
  error: undefined,
} as PmsFetchState;

const pmSlice = createSlice({
  name: "pm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pmsUI = action.payload;
      })
      .addCase(fetchAllPms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Unable to fetch data";
      })
      .addCase(fetchAllPms.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const fetchPmReducer = pmSlice.reducer;
