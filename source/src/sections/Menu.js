import React from "react";

// Fonts & Styles
import 'fontsource-roboto';
import '../App.css';

// Components
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-scroll";
import Typography from '@material-ui/core/Typography';

// Images
import avatar from '../assets/img/profile.jpg';

// Widgets
import Socials from '../widgets/Socials';

// Files
import resume from '../assets/pdf/Brenden_Smith_Resume.pdf';

function Menu(props) {

    const classes = props.style;
  
    
  
    return (
      <div container className={classes.sticky} align="center" alignItems="center" justify="center">
        <Grid container direction="column" align="center" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
          <Avatar style={{ height: "auto", width: "auto", maxHeight: "250px", maxWidth: "250px", minWidth: "100px", minHeight: "100px"}} alt="Brenden Smith" src={avatar}/>
          <Box pt={3}/>
          <Socials style={classes}/>
          <Box pt={3}/>
          <Grid item className={classes.navitem}>
            <Link to="home" smooth={true}><Button>About</Button></Link>
          </Grid>
          <Grid item className={classes.navitem}>
            <Link to="projects" smooth={true}><Button>Projects</Button></Link>
          </Grid>
          <Grid item className={classes.navitem}>
            <Button variant="contained" href={resume} target="_blank" rel="noopener noreferrer">View Resume</Button>
          </Grid>
          <Grid item>
            <Box pt={3}/>
            <Container maxWidth="md"><Typography variant="caption">Created with React and MaterialUI by Brenden Smith</Typography></Container>
          </Grid>
        </Grid>
      </div>
    )
  }

  export default Menu;