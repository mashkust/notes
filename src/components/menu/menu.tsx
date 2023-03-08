import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import SearchAppBar from "./search/search";

const Menu: React.FC = () => {
  return (
    <Box flexGrow="1">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            flexGrow="1"
            display="block"
          >
            Заметки
          </Typography>
          <SearchAppBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
