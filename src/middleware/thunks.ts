import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { FIRST_PAGE } from "src/constants";
import { fetchPms, fetchPmsError, fetchIsLoading } from "src/state/actions";
import { PmUI } from "src/types/PokemonUI";
import { extractMainInfo } from "src/utils/utils";
import { BASE_URL } from "../api/useGetPmApi";

export const fetchPmsThunk =
  (dispatch: Dispatch<AnyAction>) => async (totalRows: number) => {
    dispatch(fetchIsLoading(true));
    try {
      const requests: Promise<PmUI>[] = [];
      for (let id = FIRST_PAGE + 1; id <= totalRows; id++) {
        requests.push(
          fetch(`${BASE_URL}/pokemon/${id}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch Pokemon data");
              }
              return response.json();
            })
            .then((data) => extractMainInfo(data))
        );
      }

      const data = await Promise.all(requests);
      dispatch(fetchPms(data));
      dispatch(fetchIsLoading(false));
    } catch (error) {
      if (error instanceof Error) dispatch(fetchPmsError(error.message));
    }
  };
