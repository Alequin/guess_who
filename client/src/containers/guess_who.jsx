import React from 'react';

import TitleNav from "./../components/title_nav";
import GameDetails from "./../components/game_details";
import GuessForms from "./../components/guess_forms";

class GuessWho extends React.Component{

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
