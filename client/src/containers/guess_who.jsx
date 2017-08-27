import React from 'react';

import TitleNav from "./../components/title_nav";
import GameDetails from "./../components/game_details";

class GuessWho extends React.Component{

  render(){
    return(
      <div>
        <TitleNav/>
        <div className="container">
          <GameDetails/>
        </div>
      </div>
    );
  }

}

export default GuessWho;
