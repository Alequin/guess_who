import React from 'react';

class GameDetails extends React.Component{

  render(){
    return(
      <section className="game-details-container">
        <img src="./images/guess_who_chars.png" alt="Guess Who Characters"/>

        <aside className="guess-list">
          <h2>Guesses 15/15</h2>
          <table border="1">
            <tr>
              <th>Attribute</th>
              <th>Guess</th>
              <th>Result</th>
            </tr>
            <tr>
              <td>Hair</td>
              <td>Red</td>
              <td>Nope</td>
            </tr>
          </table>
        </aside>
      </section>
    );
  }

}

export default GameDetails;
