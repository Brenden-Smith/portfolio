import React from "react";

// Fonts & Styles
import 'fontsource-roboto';
import '../App.css';

// Components
import Avatar from '@material-ui/core/Avatar';
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
import gro from '../assets/img/gro.png';
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
  
    if (props.prj.award.search("Winner")!==-1) {
      _awardVisible = true;
    }
  
    return (
      <div>
        <Badge className={classes.badgeMargin} classes={{ badge: classes.badge}} badgeContent={"Winner"} invisible={!_awardVisible} style={{color: 'yellow', background: 'white'}}>
          <Card className={classes.prjcard} onClick={handleClickOpen}>
            <CardActionArea className={classes.prjcard} onClick={handleClickOpen}>
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
            maxWidth="xs"
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {/* <DialogTitle id="alert-dialog-title">
              <IconButton onClick={handleClose} color="black">
                <CloseIcon/> 
              </IconButton>   
            </DialogTitle> */}
            <DialogContent alignItems="center" justify="center" align="center"> 
              <DialogContentText id="alert-dialog-description">
                <Avatar src={props.prj.image}/>
                <p/>
                <Typography variant="h5" style={{ color: 'black' }}>{props.prj.title}</Typography>
                <p/>
                <Collapse in={_awardVisible}>
                  <Badge classes={{ badge: classes.badge}} badgeContent={"Winner"} invisible={!_awardVisible} style={{color: 'yellow', background: 'white'}}/>
                  <p style={{color: 'black'}}>{props.prj.award}</p>
                </Collapse>
                {props.prj.excerpt}.
                {props.prj.description}
              </DialogContentText>
            </DialogContent>
            <DialogActions justify="center" alignItems="center">
              <div style={{flex: '1 0 0'}} />
              <Button onClick={handleClose}color="primary">
                Close 
              </Button>  
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
        "Google Solution Challenge 2021",
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
      ),
      Gro : new Project(
        "Gro",
        "BeachHacks 2021",
        "Gro is an application designed to help users care for their plants by providing them with reminders and a journal for each plant",
        "I built the back-end aspects of this application, such as user authentication and cloud storage, using Firebase. I also implemented the trefle.io API to use as the plant database, and I worked on various front-end aspects with Flutter.",
        gro,
        "View GitHub",
        "https://github.com/Brenden-Smith/Gro",
      )
    }
  
    return (
      <div container align="center" alignItems="center" justify="center" style={{ minHeight: '100vh', display: 'flex', flex: 1}}>
        <Grid container direction="column" align="center" alignItems="center" justify="space-between" style={{ minHeight: '100vh', display: 'flex', flex: 1}}>
          <Grid item xs={2}/>
          <Grid item xs={12} sm={12} align="center" alignItems="center" justify="space-between">
            <Grid container direction="column" align="center" alignItems="center" justify="space-between">
              <Grid item xs={10}>
                <Grid container xs={12} spacing={0} align="center" alignItems="center" justify="space-between" style={{ display: 'flex', flex: 1}}>
                  <Grid item sm={12} md={6} lg={4}>
                    <ProjectCard prj={projectList.Hermes} style={classes}/>
                  </Grid>
                  <Grid item sm={12} md={6} lg={4}>
                    <ProjectCard prj={projectList.Journey} style={classes}/>
                  </Grid>
                  <Grid item sm={12} md={6} lg={4}>
                    <ProjectCard prj={projectList.Gro} style={classes}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={0}>
            <div>
              <Hidden smUp>
                <Typography variant="caption">Created with React and MaterialUI</Typography>
              </Hidden>
              <Box pt={3}/>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }

  export default Projects;