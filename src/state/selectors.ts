import { createSelector } from "@reduxjs/toolkit";
import { PmUI } from "src/types/PokemonUI";
import { filterCallback } from "src/utils/utils";
import { RootState } from "./store";

export const selectPms = (state: RootState) => state.fetchPmReducer.pmsUI;
export const selectPage = (state: RootState) =>
  state.pmListReducer.pagination.page;
export const selectPerPage = (state: RootState) =>
  state.pmListReducer.pagination.perPage;
//apply filters to the fetched list
export const selectFilteredPms = createSelector(
  (state: RootState) => state.fetchPmReducer.pmsUI,
  (state: RootState) => state.pmListReducer.search,
  (pmsUI, search) => {
    const { byName, byTypes } = search;
    const filteredPms = pmsUI.filter((pm: PmUI) =>
      filterCallback(pm, byName, byTypes)
    );
    return filteredPms;
  }
);
//apply pagination to the filtered list
export const selectSlicedPms = createSelector(
  (state: RootState) => state.pmListReducer,
  selectFilteredPms,
  ({ pagination }, filteredPms) => {
    const { perPage, page } = pagination;
    const startIndex = perPage * page;
    const endIndex = startIndex + perPage;
    const slicedPms = filteredPms.slice(startIndex, endIndex);
    return slicedPms;
  }
);
//derive totalPages's value
export const selectTotalPages = createSelector(
  (state: RootState) => state.pmListReducer,
  selectFilteredPms,
  ({ pagination }, filteredPms) => {
    const { perPage } = pagination;
    const slicedPms = Math.ceil(filteredPms.length / perPage);
    return slicedPms;
  }
);

export const selectIsLoading = (state: RootState) =>
  state.fetchPmReducer.isLoading;
export const selectError = (state: RootState) => state.fetchPmReducer.error;
