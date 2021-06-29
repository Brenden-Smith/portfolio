import React from "react";

// Fonts & Styles
import 'fontsource-roboto';
import '../App.css';

// Components
import Grid from '@material-ui/core/Grid';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Socials(props) {

    const classes = props.style;

    const socials = {
        GitHub: "https://github.com/Brenden-Smith",
        Instagram : "https://instagram.com/brenden.s.smith",
        LinkedIn : "https://www.linkedin.com/in/brenden-s-smith/",
        Twitter : "https://twitter.com/BrendenSSmith",
      };

    return(
        <Grid container direction="row" justify="center" align="center" spacing={1}>
            <Grid item xs={3} sm={6} md={3} lg={2.5} xl={2}>
              <a href={socials.GitHub} color="text.primary" target="_blank" rel="noopener noreferrer" mx="auto"><GitHubIcon className={classes.github}/></a>
            </Grid>
            <Grid item xs={3} sm={6} md={3} lg={2.5} xl={2}>
              <a href={socials.Instagram} color="primary" target="_blank" rel="noopener noreferrer" mx="auto"><InstagramIcon className={classes.large}/></a>
            </Grid>
            <Grid item xs={3} sm={6} md={3} lg={2.5} xl={2}>
              <a href={socials.LinkedIn} color="primary" target="_blank" rel="noopener noreferrer"><LinkedInIcon className={classes.large}/></a>
            </Grid>
            <Grid item xs={3} sm={6} md={3} lg={2.5} xl={2}>
              <a href={socials.Twitter} color="primary" target="_blank" rel="noopener noreferrer"><TwitterIcon className={classes.large}/></a>
            </Grid>
          </Grid>
    );
}

export default Socials;