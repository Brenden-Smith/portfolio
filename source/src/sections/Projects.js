import React from "react";

// Fonts & Styles
import 'fontsource-roboto';
import '../App.css';

// Components
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-scroll";
import Typography from '@material-ui/core/Typography';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// Images
import hermes from '../assets/img/hermes.png';
import journey from '../assets/img/journey.png';

class Project {

    constructor(title, award, excerpt, description, image, type, link) {
      this.title = title;
      this.award = award;
      this.excerpt = excerpt;
      this.description = description;
      this.image = image;
      this.type = type;
      this.link = link;
    }
  }

function ProjectCard(props) {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const classes = props.style;
  
    var _awardVisible = false;
  
    if (props.prj.award!="") {
      _awardVisible = true;
    }
  
    return (
      <div>
        <Badge className={classes.badgeMargin} classes={{ badge: classes.badge}} badgeContent={"Winner"} invisible={!_awardVisible} style={{color: 'yellow', background: 'white'}}>
          <Card className={classes.prjcard} onClick={handleClickOpen} align="center">
            <CardActionArea className={classes.prjcard} onClick={handleClickOpen} align="center">
                <CardMedia
                  className={classes.media}
                  image={props.prj.image}
                  title={props.prj.title}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.prj.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.prj.excerpt.substring(0, 75)}...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Dialog
            maxWidth="sm"
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <IconButton onClick={handleClose} color="black">
                <CloseIcon/> 
              </IconButton>   
            </DialogTitle>
            <DialogContent alignItems="center" justify="center" align="center"> 
              <DialogContentText id="alert-dialog-description">
                <img className={classes.media}src={props.prj.image}/>
                <div/><p> </p>
                <Typography variant="h5" style={{ color: 'black' }}>{props.prj.title}</Typography>
                <Badge className={classes.badgeMargin} classes={{ badge: classes.badge}} badgeContent={"Winner"} invisible={!_awardVisible} style={{color: 'yellow', background: 'white'}}/>
                <Collapse in={_awardVisible}>
                  <div/><p> </p>
                    <p style={{color: 'black'}}>{props.prj.award}</p>
                  <div/><p> </p>
                </Collapse>
                {props.prj.excerpt}.
                <div/><p> </p>
                {props.prj.description}
              </DialogContentText>
            </DialogContent>
            <DialogActions justify="center" alignItems="center">
              <div style={{flex: '1 0 0'}} />
              <Button href={props.prj.link} target="_blank" color="primary" justify="center" align="center">
                {props.prj.type}
              </Button>
              <div style={{flex: '1 0 0'}} />
            </DialogActions>
          </Dialog>
        </Badge>
      </div>
    );
  }

function Projects(props) {

    const classes = props.style;
  
    const projectList = {
      Hermes : new Project(
        "Hermes",
        "",
        "Hermes is an application that connects students in need of resources to donors willing to provide those resources", 
        "I worked in a team of four to design this for the Google DSC Solution Challenge 2021. We primarily used Flutter to design the front-end, and Firebase to do the back-end. I specifically worked on the visual aspects of the home view and profile view.", 
        hermes,
        "View GitHub",
        "https://github.com/danieljo09/Hermes"),
      Journey: new Project(
        "Journey",
        "MarinaHacks 2021 Winner - Mental Health",
        "Journey is an application designed to help users keep track of their moods and thoughts",
        "I worked in a team of four to design this for MarinaHacks 2021. We designed this app with Flutter, Dart, YouTube API, and Zen Quotes API. Specifically, I did both front and back-end work on this project, including implementing the quotes API and working with the data structures.",
        journey,
        "View GitHub",
        "https://github.com/Brenden-Smith/Journey",
      )
    }
  
    return (
      <div container align="center" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
        <Grid container direction="column" align="center" alignItems="center" justify="space-between" style={{ minHeight: '100vh' }}>
          <Grid item xs={2} sm={0}>
            <Hidden smUp>
              <Link to="home" smooth={true}>
                <Button style={{ backgroundColor: 'transparent' }}>
                  <Grid container direction="column">
                    <Grid item><ExpandLessIcon/></Grid>
                    <Grid item>About</Grid>
                  </Grid>
                </Button>
              </Link>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid container direction="column" align="center" alignItems="center" justify="center">
              <Grid item xs={10}>
                <Grid container xs={12} spacing={3}>
                  <Grid item xs={6}>
                    <ProjectCard prj={projectList.Hermes} style={classes}/>
                  </Grid>
                  <Grid item xs={6}>
                    <ProjectCard prj={projectList.Journey} style={classes}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={0}>
            <div>
              <Hidden smUp>
                <Typography variant="caption">Created with React and MaterialUI by Brenden Smith</Typography>
              </Hidden>
              <Box pt={3}/>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }

  export default Projects;