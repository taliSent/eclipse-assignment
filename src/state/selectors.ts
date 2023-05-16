import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PmUI } from "src/types/PokemonUI";

export const selectPms = (state: RootState) => state.pmListReducer.pmsUI;
export const selectPage = (state: RootState) =>
  state.pmListReducer.pagination.page;
export const selectPerPage = (state: RootState) =>
  state.pmListReducer.pagination.perPage;

export const selectFilteredPms = createSelector(
  (state: RootState) => state.pmListReducer,
  ({ pmsUI, search }) => {
    const { byName, byTypes } = search;
    const filteredPms = pmsUI.filter((pm: PmUI) => {
      const isNameMatch = pm.name.toLowerCase().includes(byName.toLowerCase());
      const isTypeMatch =
        byTypes.length === 0 || pm.types.some((type) => byTypes.includes(type));

      return isNameMatch && isTypeMatch;
    });
    return filteredPms;
  }
);
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
  state.pmListReducer.isLoading;
export const selectError = (state: RootState) => state.pmListReducer.error;
