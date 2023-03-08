import { Box } from "@mui/material";
import { useEffect } from "react";

import List from "./components/list/list";
import Menu from "./components/menu/menu";
import PageForm from "./components/page-form/page-form";
import { useAppSelector } from "./hooks/hooks";
import { NOTES, sessionKey } from "./const";

function App(): JSX.Element {
  const formOpen = useAppSelector((DATA) => DATA.formOpen);
  const notes = useAppSelector((DATA) => DATA.notes);

  //сохранение между сеансами
  useEffect(() => {
    sessionStorage.setItem(sessionKey, JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Menu />
      <Box sx={{ display: "flex" }}>
        <List />
        {formOpen && <PageForm />}
      </Box>
    </div>
  );
}

export default App;
