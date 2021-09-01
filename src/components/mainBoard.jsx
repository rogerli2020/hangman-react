// components that can end a round:
    // 1. eachKey
    // 2. enterGuess
    // 3. surrenderButton

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayerPlate from "./playerPlate";
import WordBoard from "./wordBoard";
import Keyboard from "./keyboard";
import SubmitGuess from "./guessSubmission";
import { useSelector, useDispatch } from "react-redux";
import { updateRoundState, 
  guesserSurrenders, 
  addScore, 
  updateCurrentScoreCalculation,
  changeMaxRoundCount,
  resetGotRandom,
  updateHintCount,
 } from '../actions';

import GameStartPage from "./gameStartPage";
import RoundEndPage from "./roundEndPage";
import HintPage from "./hintPage";
import { auto } from 'async';

const useStyles = makeStyles((theme) => ({
  root: {
    width: auto,
    height: auto,
    flexGrow: 2,
    backgroundColor: "rgb(178, 230, 242)", // MAINBOARD COLOR
    maxWidth: 1000,
    position: "relative",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    margin: 3,
    height: 200
  },
}));

export default function MainBoard() {
  const [changeMaxPage, setChangeMaxPage] = useState(false);
  const [rulesPage, setRulesPage] = useState(false);

  const classes = useStyles();

  const dispatch = useDispatch();
  const players = useSelector(state => state.playersReducer);
  const currentRound = useSelector(state => state.roundCountReducer);
  const entireGameStarted = useSelector(state => state.entireGameStartedReducer);
  const currentRoundState = useSelector(state => state.roundStateReducer);
  const maxRoundCount = useSelector(state => state.maxRoundCountReducer);
  const hintCount = useSelector(state => state.hintCountReducer);

  const surrendered = () => {
    dispatch(guesserSurrenders());
    dispatch(updateRoundState("e"));
    calcScore()
  }

  const calcScore = () => { // for surrender button...
    console.log("surrender button gotRand state:", players[0].gotRandom)
    const baseScore = 0
    const reward = 0
    const penalty = 0
    const compensation = players[0].gotRandom === true ? 100 : 0;
    const total = baseScore + reward + penalty + compensation
    
    dispatch(addScore(total));
    dispatch(updateCurrentScoreCalculation([baseScore, reward, penalty, compensation, total]))
    dispatch(resetGotRandom());
  }

  const changeMax = (increment) => {
    if (increment && maxRoundCount < 20) {
      dispatch(changeMaxRoundCount(maxRoundCount + 2));
      console.log(maxRoundCount)
    } else {
      if (maxRoundCount - currentRound >= 2)
      dispatch(changeMaxRoundCount(maxRoundCount - 2));
    }
  }

  const alterMaxRoundNum = () => {
    return (
          <div 
          style={
              {
                  height: "auto",
                  width: "auto",
                  position: "absolute",
                  backgroundColor: "rgba(191, 236, 255, 0.98)",
                  display: "flex",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  zIndex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  fontStyle: "italic",
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "rgb(6, 54, 55)",
                  textAlign: "center",
              }
          }
          > <div>
              <div style={{display:"flex"}} >
                <Button variant="outlined" 
                        style={{margin:50}} 
                        onClick={() => changeMax(false)}> 
                  - 
                </Button>

                  <h1>{maxRoundCount / 2} </h1>

                <Button variant="outlined"
                        style={{margin:50}} 
                        onClick={() => changeMax(true)}> 
                  + 
                </Button>
              </div>
              <Button variant="contained" color="primary" onClick={() => setChangeMaxPage(!changeMaxPage)}> CONFIRM </Button>
            </div>
          </div>
    )
  }

  const displayRulesPage = () => {
    return (
      <div 
          style={
              {
                  height: "auto",
                  width: "auto",
                  position: "absolute",
                  backgroundColor: "rgba(191, 236, 255, 0.98)",
                  display: "flex",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  zIndex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  fontStyle: "italic",
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "rgb(6, 54, 55)",
                  textAlign: "center",
              }
            }
            onClick={ () => setRulesPage(false)}
        >
          <div>
            <h1 style={{margin: 5}}>RULES</h1>
            <div style={{fontSize: 20, marginLeft: 50, marginRight: 50, textAlign: "left", fontStyle:"normal", fontWeight:"normal"}}>
            <li>For every player, scores are only calculated based on their performance as the Guesser. Your word choices as the Executor has no impact on your score but your opponent's.</li>
            <li>For every round, you start with 1000 Base points. Your Base points goes down as you guess more incorrect characters.</li>
            <li>For every round, you start with 500 Reward points. Your Reward points goes down as you guess more correct characters. As such, always enter your final word guess once you know what the word is.</li>
            <li>As a Guesser, you will be subtracted 200 points each time you enter a wrong final word guess.</li>
            <li>Every score calculation is adjusted according to the length of the correct word to minimize unfairness.</li>
            </div>
            <div style={{marginTop: 40, opacity:.5, fontStyle:"normal", fontSize:20}}>CLICK ANYWHERE TO CLOSE</div>
          </div>

        </div>
    )

  }

  return (
    <div className={classes.root}>

    {!entireGameStarted ? <GameStartPage/> : ""}
    {currentRoundState ==="e" ? <RoundEndPage/> : ""}
    {changeMaxPage ? alterMaxRoundNum() : ""}
    {rulesPage ? displayRulesPage() : ""}

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
              H a n g m a n
          </h1>
          <Button 
                        color="primary"
                        onClick={() => setRulesPage(true)}
                    >
                        RULES
                    </Button>
                    <Button 
                        color="primary"
                        onClick={() => setChangeMaxPage(true)}
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
            backgroundColor: "rgb(142, 189, 206)", // ROUNDPLATE COLOR
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
            <div style={{display:"flex", justifyContent:"flex-end"}}>
            <Button color="primary" onClick={() => alert(
                "This project uses a modified version of this English Dictionary: " +
                "https://github.com/dolph/dictionary/blob/master/popular.txt." + 
                "\n" + "\n" + 
                "This project also uses the Marriam-Webster Dictionary API. " + 
                "Find out more at: https://dictionaryapi.com/")}>
              CREDITS
              </Button>
            </div>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>Hints</div>
            <hr/>
            {hintCount !== 0 ? <HintPage/> : ""}

              {hintCount <= 2 ? 
                <Button variant="outlined" color="secondary" onClick={() => dispatch(updateHintCount())}>
                  {hintCount === 0 ? "GET HINT" : "GET MORE HINTS"}
                </Button> : ""
              }

            <p>50 points will be deducted for each hint requested.</p>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <WordBoard/>
        </Grid>
        <Grid item xs={4}>
            <PlayerPlate playerInfo={players[0]} role="Guesser"/>
            <SubmitGuess/>
            <hr/>

        <div style={{display: "flex", justifyContent:"center"}}>
            <div>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={surrendered}
                >
                    S U R R E N D E R
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