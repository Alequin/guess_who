import React from 'react';

import TitleNav from "./../components/title_nav";
import GameDetails from "./../components/game_details";
import GuessForms from "./../components/guess_forms";
import characters from "./../models/characters";
import dice from "./../models/Dice";

class GuessWho extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectedCharacter: characters[dice(0, characters.length-1)],
      guesses: [],
      maxGuesses: 15
    }
    console.log(this.state.selectedCharacter);
    this.handleMakeAttributeGuess = this.handleMakeAttributeGuess.bind(this);
  }

  handleMakeAttributeGuess(guess){
    const characterAttribute = this.state.selectedCharacter[guess.attribute];

    console.log(characterAttribute);
    console.log(guess.subAttributeObject);

    let guessResult = "Nope";
    if(guess.subAttributeObject === characterAttribute){
      guessResult = "Yes";
    }

    guess.result = guessResult;
    console.log(guessResult);

    // const newGuesses = this.state.guesses;
    // newGuesses.push(guess);
  }

  render(){

    return(
      <div>
        <TitleNav/>
        <div className="container">
          <GameDetails maxGuesses={this.state.maxGuesses} guesses={this.state.guesses}/>
          <GuessForms characters={characters} makeAttributeGuess={this.handleMakeAttributeGuess}/>
        </div>
      </div>
    );
  }

}

export default GuessWho;
