import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPms } from "src/middleware/thunks";
import { TOTAL_ROWS } from "src/constants";
import { AppDispatch } from "src/state/store";

const useAppLogic = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllPms(TOTAL_ROWS));
  }, []);

  return {};
};

export default useAppLogic;
