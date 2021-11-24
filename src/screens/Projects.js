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
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

// Assets
import info from '../info.json';

function ProjectCard(props) {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const classes = props.style;
    const img = require(`../assets/img/${props.prj.name.toLowerCase()}.png`).default;
  
    
    var _awardVisible = false;
  
    if (props.prj.line1.search("Winner")!==-1) {
      _awardVisible = true;
    }
  
    return (
      <div className={classes.container}>
        <Badge className={classes.badgeMargin} classes={{ badge: classes.badge}} badgeContent={"Winner"} invisible={!_awardVisible} style={{color: 'yellow', background: 'white'}}>
          <Card className={classes.prjcard} onClick={handleClickOpen}>
            <CardActionArea className={classes.prjcard} onClick={handleClickOpen}>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title={props.prj.name}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.prj.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.prj.line2.substring(0, 75)}...
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
            <DialogContent alignItems="center" justify="center" align="center"> 
              <DialogContentText id="alert-dialog-description">
                <Avatar src={img}/>
                <p/>
                <Typography variant="h5">{props.prj.name}</Typography>
                <Collapse in={_awardVisible}>
                  <p/>
                  <Badge classes={{ badge: classes.badge}} badgeContent={"Winner"} invisible={!_awardVisible} style={{color: 'yellow', background: 'white'}}/>
                </Collapse>
                <p>{props.prj.line1}</p>
                {props.prj.line2}
                {props.prj.line3}
              </DialogContentText>
            </DialogContent>
            <DialogActions justify="center" alignItems="center">
              <div style={{flex: '1 0 0'}} />
              <Button onClick={handleClose}color="primary">
                Close 
              </Button>  
              <Button href={props.prj.link} target="_blank" color="primary" justify="center" align="center">
                {props.prj.visit}
              </Button>
              <div style={{flex: '1 0 0'}} />
            </DialogActions>
          </Dialog>
        </Badge>
      </div>
    );
  }

export default function Projects(props) {

    const classes = props.style;
  
    return (
      <div container align="center" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
        <Grid container direction="column" align="center" alignItems="center" justify="space-between" style={{ minHeight: '100vh'}}>
          <Grid item xs={2}/>
          <Grid item xs={12} sm={12} align="center" alignItems="center" justify="space-between">
            <Grid container direction="column" align="center" alignItems="center" justify="space-between">
              <Grid item xs={10}>
                <Grid container xs={12} spacing={0} align="center" alignItems="center" justify="space-between">
                  {info.projects.map((proj) => {
                    return (
                      <Grid item sm={12} md={6} lg={4}>
                        <ProjectCard prj={proj} style={classes} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={0}>
            <div>
              <Hidden smUp>
                <Typography variant="caption"><Box color="text.primary">Created with React and MaterialUI</Box></Typography>
              </Hidden>
              <Box pt={3}/>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }