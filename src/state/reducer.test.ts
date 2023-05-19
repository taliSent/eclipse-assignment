import { pmListReducer } from "./reducer";
import {
  filterByName,
  filterByType,
  changePage,
  changePageSize,
} from "./actions";

//todo: fix this test
describe("pmListReducer", () => {
  const initialState = {
    search: { byName: "", byTypes: [] },
    pagination: {
      page: 1,
      perPage: 10,
    },
  };

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
  });
});
