import React from 'react';

class GuessList extends React.Component{

  render(){

    console.log(this.props.maxGuesses);

    const guessesMade = this.props.guesses.length;
    const maxGuesses = this.props.maxGuesses;
    const guessesLeft =  maxGuesses - guessesMade;

    return(
      <aside className="guess-list">
        <h2>Guesses {guessesLeft}/{maxGuesses}</h2>
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Guess</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hair</td>
              <td>Red</td>
              <td>Nope</td>
            </tr>
          </tbody>
        </table>
      </aside>
    );
  }

}

export default GuessList;
