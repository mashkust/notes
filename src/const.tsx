import { nanoid } from "nanoid";
import { Note, TextFields } from "./type";

//тестовая заметка
export const NOTES: Note[] = [
  {
    id: nanoid(3),
    text: "Тестовый текст",
    name: "Заметка",
    selected: false,
  },
];

export const defaultFields: TextFields = {
  title: "",
  description: "",
};

export const sessionKey = "notes";
