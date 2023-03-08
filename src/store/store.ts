import { configureStore } from "@reduxjs/toolkit";

import { noteData } from "./note-data";

export const store = configureStore({
  reducer: noteData.reducer,
});
