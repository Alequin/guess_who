import React from 'react';

class GuessList extends React.Component{

  render(){

    const guessesMade = this.props.guesses.length;
    const maxGuesses = this.props.maxGuesses;
    const guessesLeft =  maxGuesses - guessesMade;

    const tableData = this.props.guesses.map((guess, index) => {
      return(
        <tr key={index}>
          <td>{guess.attribute}</td>
          <td>{guess.subAttribute}</td>
          <td>{guess.result}</td>
        </tr>
      );
    });

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
            {tableData}
          </tbody>
        </table>
      </aside>
    );
  }

}

export default GuessList;
