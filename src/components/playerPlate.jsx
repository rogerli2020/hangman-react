import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "rgb(255, 147, 123)",
    margin: 5,
    maxWidth: 400,
    height: 75,
  },
  cover: {
    alignSelf: "center",
    width: 60,
    height: 60,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '0 0 auto',
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.playerInfo.avatar}
        title="Live from space album cover"
      />
        <div style={{alignSelf: "center"}}>
          <Typography style={{fontSize: 20, fontWeight: "bold", margin: 0}}>
            {props.playerInfo.name}
          </Typography>
          <Typography style={{fontSize: 15, color: "black", margin: 0}}>
            {props.role}, Score: {props.playerInfo.score} pts.
          </Typography>
        </div>
    </Card>
  );
}