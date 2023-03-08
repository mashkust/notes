import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  deleteNote,
  setEditNote,
  setFormOpen,
} from "../../../../store/note-data";
import { Note } from "../../../../type";

const NoteItem = (el: Note): JSX.Element => {
  const dispatch = useDispatch();

  const { name, id, selected } = el;

  const deleteNoteHandler = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(deleteNote(id));
    evt.stopPropagation();
  };

  const editNoteHandler = () => {
    dispatch(setEditNote(el));
    dispatch(setFormOpen(true));
  };

  return (
    <Box display="flex" width="230px">
      <Button
        disabled={selected}
        sx={{
          mt: "5px",
          width: "85%",
          justifyContent: "flex-start",
        }}
        onClick={editNoteHandler}
      >
        <Typography textOverflow="ellipsis" overflow="hidden" noWrap>
          {name}
        </Typography>
      </Button>
      <IconButton
        disabled={selected}
        edge="end"
        aria-label="delete"
        sx={{
          mr: "5px",
          width: "15%",
        }}
        onClick={deleteNoteHandler}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default NoteItem;
