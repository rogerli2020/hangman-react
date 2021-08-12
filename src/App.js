import React, { Component } from 'react';
import PlayerPlate from "./components/playerPlate"
import RoleDisplayer from './components/roleDisplayer';
import WordBoard from './components/wordBoard';
import Keyboard from "./components/keyboard";
import ScoreBoard from "./components/scoreBoard"
import Tips from "./components/tipsPage"
import SubmitGuess from './components/guessSubmission';
import SubmitNewWord from './components/newWordSubmission';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography"


class App extends Component {
  state = { 
    wholeGameStarted: false,
    correctWord: "**PLACEHOLDER**",
    currentWordState: null,
    tipsOpen: false,
    correctGuesses: [],
    falseGuesses: [],
    hintCount: 0,
    changeCount: 0,
    gameState: "n", // n = notready, i = inprogress, e = ended, s = surrendered
    falseGuessCount: 0,
    surrendered: false,
    players: [
      { key: 0,
        name: "Player1",
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        score: 0,
        }, 
      { key: 1,
        name: "Player2",
        avatar: "https://previews.123rf.com/images/cundrawan703/cundrawan7031207/cundrawan703120700008/14519717-dog-avatar-cartoon-character-icon.jpg",
        score: 0,
        }, 
    ]
   };

  getWordState = () => {
      var newCurrentWordState = [];
      for (var i = 0; i < this.state.correctWord.length; i++) {
          if (this.state.correctGuesses.includes(this.state.correctWord[i])) {
              newCurrentWordState += [this.state.correctWord[i]];
          }
          else {
              newCurrentWordState += ['_'];
          }
      }
      this.setState({currentWordState : newCurrentWordState});
  }

  updateWord = () => {
    console.log("updateWord() triggered.")
  }

  updateScore = async (newScore) => {
    if (this.state.gameState != "i") {return}
    var newArr = [...this.state.players]
    newArr[0].score += newScore
    await this.setState({players : newArr})
  }

  handleCharacterClick = async (character) => {
    const correct = this.state.correctWord.includes(character) ? true : false;
    if (correct) {
      await this.setState({correctGuesses: this.state.correctGuesses.concat(character)})
    }
    else {
      await this.setState({falseGuesses: this.state.falseGuesses.concat(character)})
    }
    this.getWordState();
    if (this.state.currentWordState.toString() == this.state.correctWord) {
      this.calcScore(true);
      this.setState( {gameState : "e"} );
    }
  }

  resetGame = async () => {
    var player0 = this.state.players[0]
    var player1 = this.state.players[1]

    await this.setState(
      { 
        wholeGameStarted: true,
        correctWord: "**PLACEHOLDER**",
        currentWordState: null,
        tipsOpen: false,
        correctGuesses: [],
        falseGuesses: [],
        hintCount: 0,
        changeCount: 0,
        gameState: "n",
        falseGuessCount: 0,
        surrendered: false,
        players: [
          player1,
          player0
        ]
       }
    )
  }

  setWord = async (inp) => {
    var inp = inp.toUpperCase()
    if (this.state.wholeGameStarted) { this.resetGame();}

    await this.setState( {wholeGameStarted: true} )
    await this.setState( {correctWord : inp, gameState : "i" } )

    this.getWordState();
  }

  toggleTips =  () => {
    this.setState({tipsOpen : !this.state.tipsOpen})
  }

  handleGuessSubmission = (inp) => {
    if (this.state.correctWord === "**PLACEHOLDER**") return; 
    var inp = inp.toUpperCase()

    if (inp == this.state.correctWord) {
      this.setState({gameState : "e", currentWordState : inp.split()})
      this.calcScore(true);
    } 
    else {
      const newFalseGuessCount = this.state.falseGuessCount + 1
      this.setState( {falseGuessCount : newFalseGuessCount} )
    }
  }

  calcScore = (updateScore) => {
    const currState = this.state
    const correctCharCount = (new Set(currState.correctWord.split(""))).size
    const wrongCharCount = 26 - correctCharCount

    const baseScore = Math.floor(1000 * (wrongCharCount - currState.falseGuesses.length)/(wrongCharCount))
    const reward = Math.floor(500 * (correctCharCount - currState.correctGuesses.length)/correctCharCount)
    const penalty = 100 * currState.hintCount + 200 * currState.falseGuessCount
    const compensation = 25 * currState.changeCount
    const total = (baseScore + reward - penalty + compensation) > 100 ? (baseScore + reward - penalty + compensation) : 100
    
    if (updateScore) {
      if (this.state.surrendered) {
        this.updateScore(100)
      }
      else {this.updateScore(total)}
    }
    if (this.state.surrendered) { return [100, 0, 0, 0, 0] }
    return [baseScore, reward, penalty, compensation, total]
  }

  surrender = async () => {
    if (this.state.gameState != "i" || this.state.surrendered) return;
    await this.setState( {surrendered : true, gameState : 's'} );
    await this.calcScore(true);
  }

  render() { 
    return ( 
      <React.Fragment>
        <main className="container">

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Hangman (2-player local) 
            </Typography>
          </Toolbar>
        </AppBar>


        <main-board>

        {/* <main-board class="overlay" /> */}

        <div>
        {this.state.gameState != "i" ? 
          <div> {this.state.wholeGameStarted ? this.state.players[0].name : this.state.players[1].name}, enter a word to start a new game...</div> : 
          <div>Game is in progress...</div>}
          <br/>
        <SubmitNewWord setWord={this.setWord}/>
        </div>

        <div>
        <PlayerPlate
            key={this.state.players[1].key}
            avatar={this.state.players[1].avatar}
            name={this.state.players[1].name}
            score={this.state.players[1].score}/>
        </div>

        <ScoreBoard currState={this.state} scores={this.calcScore(false)}></ScoreBoard>
        <WordBoard word={this.state.currentWordState} gameState={this.state.gameState}/>

        <div>
          <PlayerPlate
              key={this.state.players[0].key}
              avatar={this.state.players[0].avatar}
              name={this.state.players[0].name}
              score={this.state.players[0].score}/>
          <SubmitGuess handleGuessSubmission={this.handleGuessSubmission}/>
          <Button variant="contained" color="secondary"  onClick={this.surrender}>SURRENDER</Button>
          <Button variant="contained" color="primary" onClick={this.toggleTips}>TIPS</Button>
        </div>

        <Keyboard 
          isReady={this.state.correctWord==="**PLACEHOLDER**" || this.state.gameState == "e" || this.state.gameState == "s" ? false : true}
          handleCharacterClick={this.handleCharacterClick}
          usedList={this.state.correctGuesses + this.state.falseGuesses}/>

        {this.state.tipsOpen ? <Tips onClick={this.toggleTips}/> : null}
        
        </main-board>

        </main>
      </React.Fragment>
     );
  }
}
 
export default App;