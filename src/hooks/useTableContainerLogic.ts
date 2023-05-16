import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "src/state/selectors";

const useListLogic = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return {
    isLoading,
    error,
  };
};
export default useListLogic;
