import { useMemo } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import NoteItem from "./note-item/note-item";

import { useAppSelector } from "../../../hooks/hooks";
import { Note } from "../../../type";

const NotesMap: React.FC = () => {
  const notes = useAppSelector(( DATA ) => DATA.notes);
  const search = useAppSelector(( DATA ) => DATA.search);

  const filteredNotes = useMemo(
    () =>
      notes
        .filter((el: Note) =>
          el.name.toLowerCase().startsWith(search.toLowerCase())
        ),
    [notes, search]
  );

  if (!filteredNotes.length) return <Typography>Не найдено</Typography>;
  return (
    <Box maxHeight="450px" overflow="scroll">
      {filteredNotes.map((el: Note) => (
        <NoteItem {...el} key={el.id} />
      ))}
    </Box>
  );
};

export default NotesMap;
