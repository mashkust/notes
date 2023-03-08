import { store } from "./store/store";

export type State = ReturnType<typeof store.getState>;

export type Note = {
  id: string;
  text: string;
  name: string;
  selected: boolean;
};

export type TextFields = {
  title: string;
  description: string;
};

export type NoteData = {
  notes: Note[];
  search: string;
  formOpen: boolean;
  textFields: TextFields;
};
