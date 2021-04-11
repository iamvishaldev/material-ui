import React from "react";
import "./styles/App.css";
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
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    // paddingTop: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Container className={classes.root} disableGutters>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
