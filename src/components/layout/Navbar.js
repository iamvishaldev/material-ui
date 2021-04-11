import React from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  AppBar,
  Toolbar,
} from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Material UI
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
