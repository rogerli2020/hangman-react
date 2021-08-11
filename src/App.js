import React, { Component } from 'react';
import PlayerPlate from "./components/playerPlate"
import RoleDisplayer from './components/roleDisplayer';
import WordBoard from './components/wordBoard';
import Keyboard from "./components/keyboard";
import ScoreBoard from "./components/scoreBoard"
import Tips from "./components/tipsPage"
import SubmitGuess from './components/guessSubmission';

class App extends Component {
  state = { 
    correctWord: "**PLACEHOLDER**",
    currentWordState: null,
    tipsOpen: false,
    correctGuesses: [],
    falseGuesses: [],
    hintCount: 0,
    changeCount: 0,
    players: [
      { key: 0,
        name: "Player",
        avatar: "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg",
        score: 0,
        role: "GUESSER" }, 
      { key: 1,
        name: "COMPUTER",
        avatar: "https://w7.pngwing.com/pngs/529/418/png-transparent-computer-icons-internet-bot-eyes-miscellaneous-people-sticker-thumbnail.png",
        score: 0,
        role: "EXECUTOR" }, 
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
      this.setState({currentWordState : newCurrentWordState}, () => console.log(newCurrentWordState));
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
  }

  setWord = async () => {
    // THIS IS A TEST FUNCTION!!!
    await this.setState({correctWord : "ALCOHOL" }, () => {console.log(this.state.correctWord)});
    this.getWordState();
  }

  toggleTips =  () => {
    const newBool = !this.state.tipsOpen
    console.log(newBool)
    this.setState({tipsOpen : newBool})
  }

  render() { 
    return ( 
      <React.Fragment>
        <main className="container">
        <WordBoard word={this.state.currentWordState}/>
        <RoleDisplayer role={this.state.players[0].role}/>
        {this.state.players.map(
          player => (<PlayerPlate
            key={player.key}
            avatar={player.avatar}
            name={player.name}
            score={player.score}/>)
        )}
        <Keyboard 
          isReady={this.state.correctWord==="**PLACEHOLDER**" ? false : true}
          handleCharacterClick={this.handleCharacterClick}
          usedList={this.state.correctGuesses + this.state.falseGuesses}/>

        <button onClick={this.setWord}>START GAME</button>
        <button onClick={this.toggleTips}>TIPS</button>
        {this.state.tipsOpen ? <Tips onClick={this.toggleTips}/> : null}
        <ScoreBoard currState={this.state} addScore={this.updateScore}></ScoreBoard>
        <SubmitGuess/>
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;