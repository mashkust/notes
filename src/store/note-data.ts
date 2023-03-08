import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { defaultFields, NOTES } from "../const";
import { Note, NoteData } from "../type";

//заметки при инициализации
const sessionNotes = () => {
  const sessionNotes = sessionStorage.getItem("notes");
  const initial = sessionNotes !== null ? JSON.parse(sessionNotes) : NOTES;
  return initial;
};

const initialState: NoteData = {
  notes: sessionNotes(),
  search: "",
  formOpen: false,
  textFields: defaultFields,
};

export const noteData = createSlice({
  name: "DATA",
  initialState,
  reducers: {
    //хранить состояние полей ввода
    setTextFields: (
      state,
      action: {
        payload: { value: string; name: "description" | "title" | null };
        type: string;
      }
    ) => {
      const { name, value } = action.payload;
      if (name) {
        name === "title"
          ? (state.textFields.title = value)
          : (state.textFields.description = value);
      } else {
        state.textFields = defaultFields;
      }
    },
    //создает заметку
    addNote: (state) => {
      const { title, description } = state.textFields;
      const newNote: Note = {
        id: nanoid(3),
        name: title,
        text: description,
        selected: false,
      };
      state.notes.push(newNote);
    },
    //редактирует заметку
    editNote: (state, action) => {
      const { payload } = action;
      const { title, description } = state.textFields;
      const notes = state.notes;
      state.notes = notes.map((el) =>
        el.id === payload
          ? {
              id: payload,
              name: title,
              text: description,
              selected: false,
            }
          : el
      );
    },
    //удаляет заметку
    deleteNote: (state, action) => {
      const { payload } = action;
      const notes = state.notes;
      state.notes = notes.filter((note) => note.id !== payload);
    },
    //ищет заметку
    setSearch: (state, action) => {
      state.search = action.payload;
      const { payload } = action;
      if (payload) {
        state.formOpen = false;
      }
    },
    //решает: редактирует или создает
    setEditNote: (state, action) => {
      const { payload } = action;
      if (payload) {
        state.notes.forEach((el) => {
          el.selected = el.id === action.payload.id;
          state.textFields.title = action.payload.name;
          state.textFields.description = action.payload.text;
        });
      } else {
        state.notes.forEach((el) => {
          el.selected = false;
          state.textFields = defaultFields;
        });
      }
    },
    //открывает форму создания заметки
    setFormOpen: (state, action) => {
      state.formOpen = action.payload;
    },
  },
});

export const {
  setTextFields,
  addNote,
  editNote,
  deleteNote,
  setEditNote,
  setSearch,
  setFormOpen,
} = noteData.actions;
