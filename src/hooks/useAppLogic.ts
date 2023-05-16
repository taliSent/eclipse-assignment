import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPmsThunk } from "src/middleware/thunks";
import { TOTAL_ROWS } from "src/constants";

const useAppLogic = () => {
  const dispatch = useDispatch();
  const fetchInitial = fetchPmsThunk(dispatch);

  useEffect(() => {
    fetchInitial(TOTAL_ROWS);
  }, []);

  return {};
};

export default useAppLogic;
