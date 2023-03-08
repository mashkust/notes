import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

import NotesMap from "./notes-map/notes-map";

import { setEditNote, setFormOpen } from "../../store/note-data";

const List: React.FC = () => {
  const dispatch = useDispatch();

  const addNoteHandler = () => {
    dispatch(setEditNote(null));
    dispatch(setFormOpen(true));
  };

  return (
    <Box flexDirection="column" display="flex" margin="80px auto auto auto">
      <NotesMap />
      <Button
        onClick={addNoteHandler}
        sx={{
          mt: "40px",
          width: "130px",
        }}
        variant="contained"
      >
        Добавить
      </Button>
    </Box>
  );
};

export default List;
