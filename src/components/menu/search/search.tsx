import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import { useAppSelector } from "../../../hooks/hooks";
import { setEditNote, setSearch } from "../../../store/note-data";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled";

const SearchAppBar: React.FC = () => {
  const search = useAppSelector((DATA ) => DATA.search);
  const dispatch = useDispatch();

  const onInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(evt.currentTarget.value));
    dispatch(setEditNote(null));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Поиск…"
        autoComplete="off"
        value={search}
        onChange={onInputChangeHandler}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchAppBar;
