import React, { Component } from 'react';
import PlayerPlate from "./components/playerPlate"
import RoleDisplayer from './components/roleDisplayer';
import WordBoard from './components/wordBoard';
import Keyboard from "./components/keyboard";
import ScoreBoard from "./components/scoreBoard"
import Tips from "./components/tipsPage"
import SubmitGuess from './components/guessSubmission';
import SubmitNewWord from './components/newWordSubmission';

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
        name: "Bob",
        avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
        score: 0,
        }, 
      { key: 1,
        name: "Alice",
        avatar: "https://cdn.iconscout.com/icon/premium/png-512-thumb/female-avatar-12-774634.png",
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
      this.setState( {gameState : "e"} );
      this.calcScore(true);
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
        gameState: "n", // n = notready, i = inprogress, e = ended, s = surrendered
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
    const total = baseScore + reward - penalty + compensation

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
    if (this.state.gameState != "i" || this.state.surrendered) {return} 
    await this.setState( {surrendered : true, gameState : 's'} );
    await this.calcScore(true);
  }

  render() { 
    return ( 
      <React.Fragment>
        <main className="container">
        <WordBoard word={this.state.currentWordState} gameState={this.state.gameState}/>
        <RoleDisplayer player={this.state.players[0]}/>
        {this.state.players.map(
          player => (<PlayerPlate
            key={player.key}
            avatar={player.avatar}
            name={player.name}
            score={player.score}/>)
        )}
        <Keyboard 
          isReady={this.state.correctWord==="**PLACEHOLDER**" || this.state.gameState == "e" || this.state.gameState == "s" ? false : true}
          handleCharacterClick={this.handleCharacterClick}
          usedList={this.state.correctGuesses + this.state.falseGuesses}/>
        
        {this.state.gameState != "i" ? 
          <div> {this.state.wholeGameStarted ? this.state.players[0].name : this.state.players[1].name}, enter a word to start game...</div> : 
          <div>Game is in progress...</div>}
        <SubmitNewWord setWord={this.setWord}/>
        <SubmitGuess handleGuessSubmission={this.handleGuessSubmission}/>

        <button onClick={this.toggleTips}>TIPS</button>
        <button onClick={this.surrender}>SURRENDER</button>
        {this.state.tipsOpen ? <Tips onClick={this.toggleTips}/> : null}
        <ScoreBoard currState={this.state} scores={this.calcScore(false)}></ScoreBoard>

        </main>
      </React.Fragment>
     );
  }
}
 
export default App;