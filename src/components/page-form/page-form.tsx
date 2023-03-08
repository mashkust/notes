import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useAppSelector } from "../../hooks/hooks";
import {
  setEditNote,
  setFormOpen,
  addNote,
  setTextFields,
  editNote,
} from "../../store/note-data";

const PageForm: React.FC = () => {
  const textFields = useAppSelector((DATA) => DATA.textFields);
  const notes = useAppSelector((DATA) => DATA.notes);

  const dispatch = useDispatch();

  const { title, description } = textFields;

  const getDefaultField = () => {
    dispatch(setTextFields({ value: "", name: null }));
  };

  const btnExitHandler = () => {
    getDefaultField();
    dispatch(setFormOpen(false));
    dispatch(setEditNote(null));
  };

  const onChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      setTextFields({
        value: evt.currentTarget.value,
        name: evt.currentTarget.name as "title" | "description" | null,
      })
    );
  };

  const onConfirm = () => {
    if (!title) return;
    if (selectedNote) {
      dispatch(editNote(selectedNote.id));
      dispatch(setEditNote(null));
    } else {
      dispatch(addNote());
    }
    getDefaultField();
    dispatch(setFormOpen(false));
  };

  const selectedNote = useMemo(
    () => notes.find((el: { selected: any }) => el.selected),
    [notes]
  );

  return (
    <Box
      component="form"
      width="550px"
      margin="60px auto auto auto"
      display="flex"
      flexDirection="column"
      autoComplete="off"
    >
      <TextField
        sx={{
          maxWidth: "50%",
          mb: "40px",
        }}
        id="standard-required"
        label="Обязательное поле"
        placeholder="Название"
        variant="standard"
        name="title"
        value={title}
        onChange={onChangeHandler}
      />
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={15}
        value={description}
        name="description"
        placeholder="Введите текст"
        fullWidth
        onChange={onChangeHandler}
      />
      <Box
        margin="40px 0 0 0"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
      >
        <Button
          sx={{
            mr: "20px",
          }}
          variant="text"
          onClick={btnExitHandler}
        >
          Отмена
        </Button>
        <Button variant="contained" onClick={onConfirm}>
          {selectedNote ? "Применить" : "Создать"}
        </Button>
      </Box>
    </Box>
  );
};

export default PageForm;
