import { makeStyles } from '@material-ui/core/styles';


// Components
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// Views
import About from './About';
import Menu from '../components/Menu';
import Projects from './Projects';

const useStyles = makeStyles((theme) => ({
    prjcard: {
      width: '100%',
    height: '100%',
      backgroundColor: theme.palette.background.default,
    },
    badge: {
      backgroundColor: "#FFD700",
      color: "black",
      fontSize: 16,
      fontWeight: 'bold',
    },
    badgeMargin: {
      margin: theme.spacing.unit * 5,
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
      width: '100%',
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
      color: theme.palette.text.primary,
    },
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      color: theme.palette.text.primary,
    },
    avatar: {
      maxWidth: theme.spacing(25),
      maxHeight: theme.spacing(25),
      minWidth: theme.spacing(5),
      minHeight: theme.spacing(5),
    },
    root: {
      maxWidth: '100vw',
      backgroundColor: theme.palette.background.default,
    },
    container: {
        backgroundColor: theme.palette.background.default,
    }
  }));

export default function Wrapper() {

    const classes = useStyles();

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
                <a id="home"/><About style={classes}/>
                <a id="projects"/><Projects style={classes}/>
            </Grid>
            <Grid item xs={1}/>
            </Grid>
        </div>
    );
}