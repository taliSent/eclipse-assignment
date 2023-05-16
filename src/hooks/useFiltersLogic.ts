import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetTypesQuery } from "src/api/useGetPmApi";
import { filterByName, filterByType } from "src/state/actions";
import { debounce } from "src/utils/utils";

const useFiltersLogic = () => {
  const { data: allTypes } = useGetTypesQuery();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const dispatch = useDispatch();
  const handleChangeSelect = (
    event: SelectChangeEvent<typeof selectedTypes>
  ) => {
    const {
      target: { value },
    } = event;
    const val = typeof value === "string" ? value.split(",") : value;
    setSelectedTypes(val);
    dispatch(filterByType(val));
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => dispatch(filterByName(e.target.value)), 500)();
  };
  return {
    handleChangeSelect,
    handleChangeInput,
    allTypes,
    selectedTypes,
    isTypesArray: allTypes && Array.isArray(allTypes),
  };
};
export default useFiltersLogic;
