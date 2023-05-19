import { createAsyncThunk } from "@reduxjs/toolkit";
import { FIRST_PAGE } from "src/constants";
import { PmUI } from "src/types/PokemonUI";
import { extractMainInfo } from "src/utils/utils";
import { BASE_URL } from "../api/useGetTypes";

const getPmById = (id: number) => {
  return fetch(`${BASE_URL}/pokemon/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => extractMainInfo(data));
};

export const fetchAllPms = createAsyncThunk(
  "pm/fetchAllPms",
  async (totalRows: number) => {
    const requests: Promise<PmUI>[] = [];
    for (let id = FIRST_PAGE + 1; id <= totalRows; id++) {
      requests.push(getPmById(id));
    }
    const data = await Promise.all(requests);
    return data;
  }
);
