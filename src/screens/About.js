import React from "react";

// Fonts & Styles
import 'fontsource-roboto';
import '../App.css';

// Components
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

// Widgets
import Socials from '../components/Socials';

// Assets
import avatar from '../assets/img/profile.jpg';
import resume from '../assets/pdf/Brenden_Smith_Resume.pdf';

function About(props) {

  const classes = props.style;

    return (
      <div container align="center" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
        <Grid container direction="column" align="center" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={10}>
              <Hidden smUp>
                <Avatar style={{ height: "auto", width: "auto", maxHeight: "150px", maxWidth: "150px", minWidth: "50px", minHeight: "50px"}} alt="Brenden Smith" src={avatar}/>
                <Box pt={3}/>
              </Hidden>
              <Typography variant="h2"><Box color="text.primary">Brenden Smith</Box></Typography>
              <Box pt={1.5}/>
              {/* <Container fixed direction="row" style={{ minHeight: '100px'}}><Typing/></Container> */}
              <Box pt={1.5}/>
              <Typography variant="h5"><Box color="text.primary">Student at CSU Long Beach • ASI Senator for College of Engineering • Undergraduate Research Assistant at CSU Long Beach</Box></Typography>
              <Box pt={3}/>
              <Typography variant="subtitle1"><Box color="text.primary">C++ • CSS • Dart • HTML • Java • JavaScript • Python • Swift</Box></Typography>
              <Typography variant="subtitle1"><Box color="text.primary">Flutter • Firebase • React • SwiftUI</Box></Typography>
              <Hidden smUp>
                <Box pt={3}/>
                <Grid container direction="row">
                  <Grid item xs={3}/>
                  <Grid item xs={6}><Socials style={classes}/></Grid>
                  <Grid item xs={3}/>
                </Grid>
                <Box pt={3}/>
                <Button variant="contained" href={resume} target="_blank" rel="noopener noreferrer">View Resume</Button>
              </Hidden>
          </Grid>
        </Grid>
      </div>
    )
  }

  export default About;