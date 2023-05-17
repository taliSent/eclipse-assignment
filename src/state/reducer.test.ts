import { pmListReducer } from "./reducer";
import {
  fetchPmsError,
  fetchIsLoading,
  fetchPms,
  filterByName,
  filterByType,
  changePage,
  changePageSize,
} from "./actions";

describe("pmListReducer", () => {
  const initialState = {
    pmsUI: [],
    search: { byName: "", byTypes: [] },
    pagination: {
      page: 1,
      perPage: 10,
      totalPages: 0,
    },
    error: undefined,
    isLoading: false,
  };

  it("should handle fetchPmsError", () => {
    const error = "Failed to fetch Pokemon";
    const action = fetchPmsError(error);

    const newState = pmListReducer(initialState, action);

    expect(newState.error).toBe(error);
  });

  it("should handle fetchIsLoading", () => {
    const isLoading = true;
    const action = fetchIsLoading(isLoading);

    const newState = pmListReducer(initialState, action);

    expect(newState.isLoading).toBe(isLoading);
  });

  it("should handle fetchPms", () => {
    const pms = [
      {
        id: 6,
        name: "charizard",
        types: ["fire"],
        abilities: ["blaze", "solar-power"],
        height: 7,
        weight: 905,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      },
      {
        id: 4,
        name: "charmander",
        types: ["fire"],
        abilities: ["blaze", "solar-power"],
        height: 6,
        weight: 85,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
    ];
    const action = fetchPms(pms);

    const newState = pmListReducer(initialState, action);

    expect(newState.pmsUI).toEqual(pms);
  });

  it("should handle filterByName", () => {
    const filterName = "Char";
    const action = filterByName(filterName);

    const newState = pmListReducer(initialState, action);

    expect(newState.search.byName).toBe(filterName);
    expect(newState.pagination.page).toBe(0);
  });

  it("should handle filterByType", () => {
    const filterTypes = ["fire", "grass"];
    const action = filterByType(filterTypes);

    const newState = pmListReducer(initialState, action);

    expect(newState.search.byTypes).toEqual(filterTypes);
    expect(newState.pagination.page).toBe(0);
  });

  it("should handle changePage", () => {
    const page = 2;
    const action = changePage(page);

    const newState = pmListReducer(initialState, action);

    expect(newState.pagination.page).toBe(page);
  });

  it("should handle changePageSize", () => {
    const perPage = 20;
    const action = changePageSize(perPage);

    const newState = pmListReducer(initialState, action);

    expect(newState.pagination.perPage).toBe(perPage);
    expect(newState.pagination.page).toBe(0);
    expect(newState.pagination.totalPages).toBe(
      Math.ceil(newState.pmsUI.length / perPage)
    );
  });
});
