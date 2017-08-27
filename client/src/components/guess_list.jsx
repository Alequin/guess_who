import React from 'react';

class GuessList extends React.Component{

  render(){
    return(
      <aside className="guess-list">
        <h2>Guesses 15/15</h2>
        <table>
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
    );
  }

}

export default GuessList;
