import { createReducer } from "@reduxjs/toolkit";
import { FIRST_PAGE, INITIAL_PAGE_SIZE, TOTAL_ROWS } from "src/constants";
import { Pagination } from "src/types/Pagination";
import { PmUI } from "../types/PokemonUI";
import {
  changePage,
  changePageSize,
  fetchIsLoading,
  fetchPms,
  fetchPmsError,
  filterByName,
  filterByType,
} from "./actions";

type PmListT = {
  pmsUI: PmUI[];
  search: { byName: string; byTypes: string[] };
  pagination: Pagination;
  error?: string;
  isLoading: boolean;
};

const initial: PmListT = {
  pmsUI: [],
  search: { byName: "", byTypes: [] },
  pagination: {
    page: FIRST_PAGE,
    perPage: INITIAL_PAGE_SIZE,
    totalPages: Math.ceil(TOTAL_ROWS / INITIAL_PAGE_SIZE),
  },
  error: undefined,
  isLoading: false,
};

export const pmListReducer = createReducer(initial, (builder) => {
  builder
    .addCase(fetchPmsError, (state, action) => {
      const newState = {
        ...state,
        error: action.payload,
      };
      return newState;
    })
    .addCase(fetchIsLoading, (state, action) => {
      const newState = {
        ...state,
        isLoading: action.payload,
      };
      return newState;
    })
    .addCase(fetchPms, (state, action) => {
      const newState = {
        ...state,
        pmsUI: action.payload,
      };
      return newState;
    })
    .addCase(filterByName, (state, action) => {
      const newPagination = { ...state.pagination, page: 0 };
      const newState = {
        ...state,
        pagination: newPagination,
        search: { ...state.search, byName: action.payload },
      };
      return newState;
    })
    .addCase(filterByType, (state, action) => {
      const newPagination = { ...state.pagination, page: 0 };
      const newState = {
        ...state,
        pagination: newPagination,
        search: {
          ...state.search,
          byTypes: action.payload,
        },
      };
      return newState;
    })
    .addCase(changePage, (state, action) => {
      const paginationNew = {
        ...state.pagination,
        page: action.payload,
      };
      const newState = {
        ...state,
        pagination: paginationNew,
      };
      return newState;
    })
    .addCase(changePageSize, (state, action) => {
      const perPage = action.payload;
      const totalPages = Math.ceil(state.pmsUI.length / perPage);

      const paginationNew = {
        ...state.pagination,
        page: 0,
        perPage: perPage,
        totalPages: totalPages,
      };
      const newState = { ...state, pagination: paginationNew };
      return newState;
    });
});
