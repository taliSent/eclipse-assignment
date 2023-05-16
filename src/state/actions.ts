import { createAction } from "@reduxjs/toolkit";
import { PmUI, PmList } from "src/types/PokemonUI";

export const fetchPms = createAction<PmUI[]>("FETCH_PMS");
export const fetchPmsError = createAction<string>("FETCH_PMS_ERROR");
export const fetchIsLoading = createAction<boolean>("FETCH_PMS_IS_LOADING");

export const filterByName = createAction<string>("FILTER_BY_NAME");
export const filterByType = createAction<string[]>("FILTER_BY_TYPE");
export const clearFilter = createAction<PmList[] | undefined>("CLEAR_FILTER");

export const openModal = createAction<number>("OPEN_MODAL");
export const closeModal = createAction("CLOSE_MODAL");

export const changePage = createAction<number>("CHANGE_PAGE");
export const changePageSize = createAction<number>("CHANGE_PAGE_SIZE");
