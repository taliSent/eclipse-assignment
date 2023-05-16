import { useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changePage, changePageSize } from "src/state/actions";
import {
  selectPage,
  selectPerPage,
  selectSlicedPms,
  selectTotalPages,
} from "src/state/selectors";

const useTableLogic = () => {
  const pmsOnPage = useSelector(selectSlicedPms);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const paddingValue: "none" | "normal" = isMobile ? "none" : "normal";
  const dispatch = useDispatch();
  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => dispatch(changePage(newPage));

  const handlePageSizeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => dispatch(changePageSize(+e.target.value));

  return {
    handlePageChange,
    handlePageSizeChange,
    pmsOnPage,
    page,
    perPage,
    totalCount: totalPages * perPage,
    paddingValue,
  };
};
export default useTableLogic;
