import React from "react";
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Fonts & Styles
import 'fontsource-roboto';
import './App.css';

// Components
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// Views
import About from './sections/About';
import Menu from './sections/Menu';
import Projects from './sections/Projects';

const useStyles = makeStyles((theme) => ({
    prjcard: {
      minHeight: 275,
      maxHeight: 275,
      verticalAlign: 'top',
    },
    badge: {
      backgroundColor: "#FFD700",
      color: "black",
      fontSize: 16,
      fontWeight: 'bold',
    },
    badgeMargin: {
      margin: theme.spacing.unit * 2,
    },
  
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    sticky: {
      position: "sticky",
      top: "0rem",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    column: {
      padding: theme.spacing(15),
    },
    navitem: {
      padding: theme.spacing(1.5),
      textAlign: 'center',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    github: {
      width: theme.spacing(4.1),
      height: theme.spacing(4.8),
      padding: theme.spacing(0, 0.5, 0, 0),
      color: 'black',
    },
    link: {
      color: 'black',
    },
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      color: 'black',
    },
    avatar: {
      maxWidth: theme.spacing(25),
      maxHeight: theme.spacing(25),
      minWidth: theme.spacing(5),
      minHeight: theme.spacing(5),
    },
  }));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {

  const classes = useStyles();
  const t = theme;

  return (
    <div container className={classes.root}>
      <Grid container align="center" justify="center">
        <Grid item xs={0} sm={1}/>
        <Hidden only="xs">
          <Grid item xs={0} sm={2} elevation={3} style={{ minHeight: '100vh' }}>
            <Menu style={classes}/>
          </Grid>
        </Hidden>
        <Grid item xs={1}/>
        <Grid item sm={7}>
          <a id="home"/><About style={classes} th={t}/>
          <a id="projects"/><Projects style={classes}/>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    </div>
  );
}

export default App;
