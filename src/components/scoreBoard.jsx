import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "beige",
    margin: 5,
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  surrendered: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  msg: {    
    color: "gray",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: "15px",
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography className={classes.title} color="textSecondary">
          {props.playerInfo.name}'s Score:
        </Typography>

        <hr/>
 
        <Typography variant="body2" component="p">
          {props.playerInfo.surrendered 
            ? 
            <Typography className={classes.surrendered}>
              SURRENDERED
            </Typography> 
            : ""
          }
          {props.playerInfo.currScore === null ? 
                    <Typography className={classes.msg}>
                      hasn't played as the Guesser yet...
                    </Typography> :
          <table>
            <tr>
              <td>BASE POINTS:</td>
              <td>{props.playerInfo.currScore[0]}</td>
            </tr>
            <tr>
              <td>REWARD POINTS:</td>
              <td>{props.playerInfo.currScore[1]}</td>
            </tr>
            <tr>
              <td>PENALTY:</td>
              <td>{props.playerInfo.currScore[2]}</td>
            </tr>
            <tr>
              <td>COMPENSATION:</td>
              <td>{props.playerInfo.currScore[3]}</td>
            </tr>
            <tr>
              <td>ROUND TOTAL:</td>
              <td>{props.playerInfo.currScore[4]}</td>
            </tr>
            <br/>

          </table>
          }
          <table>
          <tr>
              <td> <b>CUM. TOTAL:</b> </td>
              <td>{props.playerInfo.score}</td>
            </tr>
          </table>
        </Typography>

      </CardContent>
    </Card>
  );
}