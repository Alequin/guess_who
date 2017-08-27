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
      selectedCharacter: characters[dice(0, characters.length-1)]
    }
  }

  render(){
    return(
      <div>
        <TitleNav/>
        <div className="container">
          <GameDetails/>
          <GuessForms/>
        </div>
      </div>
    );
  }

}

export default GuessWho;
