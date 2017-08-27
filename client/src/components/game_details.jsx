import React from 'react';

import GuessList from "./guess_list";

class GameDetails extends React.Component{

  render(){
    return(
      <section className="game-details-container">
        <img src="./images/guess_who_chars.png" alt="Guess Who Characters"/>
        <GuessList/>
      </section>
    );
  }

}

export default GameDetails;
