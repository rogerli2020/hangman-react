import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayerPlate from "./playerPlate";
import WordBoard from "./wordBoard";
import Keyboard from "./keyboard"
import SubmitGuess from "./guessSubmission"
import { useSelector, useDispatch } from "react-redux";
import { updateRoundState, guesserSurrenders, addScore, updateCurrentScoreCalculation } from '../actions';

import GameStartPage from "./gameStartPage";
import RoundEndPage from "./roundEndPage";
import { auto } from 'async';

const useStyles = makeStyles((theme) => ({
  root: {
    width: auto,
    height: auto,
    flexGrow: 2,
    backgroundColor: "rgb(155, 210, 210)",
    maxWidth: 1000,
    position: "relative",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 3,
    height: 200
  },
}));

export default function MainBoard() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const players = useSelector(state => state.playersReducer);
  const currentRound = useSelector(state => state.roundCountReducer);
  const entireGameStarted = useSelector(state => state.entireGameStartedReducer);
  const currentRoundState = useSelector(state => state.roundStateReducer);
  const maxRoundCount = useSelector(state => state.maxRoundCountReducer);

  const surrendered = () => {
    dispatch(guesserSurrenders());
    dispatch(updateRoundState("e"));
    calcScore()
  }

  const calcScore = () => {

    const baseScore = 0
    const reward = 0
    const penalty = 0
    const compensation = 0
    const total = 0
    
    dispatch(addScore(total))
    dispatch(updateCurrentScoreCalculation([baseScore, reward, penalty, compensation, total]))
  }

  return (
    <div className={classes.root}>

    {!entireGameStarted ? <GameStartPage/> : ""}
    {currentRoundState ==="e" ? <RoundEndPage/> : ""}

      <Grid container>
        <Grid item xs={3}>
          <h1 style={
            {fontStyle:"italic",
            textDecoration:"underline overline",
            marginLeft:20, 
            display: "flex",
            opacity:"0.5",
            }
          }
          >
              H a n g-m a n!!!
          </h1>
          <Button 
                        color="primary"
                    >
                        RULES
                    </Button>
                    <Button 
                        color="primary"
                    >
                        CHANGE MAX ROUNDS
                    </Button>
        </Grid>

        <Grid item xs={5}>
          <div style={{
            display: "flex", 
            maxHeight: "70%",
            marginLeft: 20,
            marginRight:20,
            marginTop: 5,
            justifyContent:"center", 
            alignItems: "center",
            backgroundColor: "rgb(135, 190, 190)",
            borderRadius: 10,
            }}>
          <h1 style={{fontStyle:"italic", marginLeft:10, display: "flex", fontSize:40}}>
              Round {currentRound <= 2 ? 1 : Math.floor(currentRound / 2)}
              <h1 style={{fontSize: 20, opacity: ".5"}}> / {maxRoundCount / 2}</h1>
          </h1>
          </div>

        </Grid>

        <Grid item xs={4}>
          <PlayerPlate playerInfo={players[1]} role="Executor"/>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>HINT <br/>(under construction)</Paper>
        </Grid>
        <Grid item xs={8}>
          <WordBoard/>
        </Grid>
        <Grid item xs={4}>
            <PlayerPlate playerInfo={players[0]} role="Guesser"/>
            <SubmitGuess/>
            <hr/>

        <div style={{alignItems: 'center', display: "flex"}}>
            <div style={{marginLeft: 7}}>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={surrendered}
                >
                    SURRENDER
                </Button>
            </div>

            <div style={{marginLeft: 7}}>
                <Button 
                    variant="contained" 
                    color="primary"
                >
                    TIPS
                </Button>
            </div>
        </div>


        </Grid>
        <Grid item xs={8}>
          <Keyboard/>
        </Grid>
      </Grid>
    </div>
  );
}