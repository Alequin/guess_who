import React from 'react';

class GuessPerson extends React.Component{

  render(){

    const characters = this.props.characters.map((character, index) => {
      return <option value={index}>{character.name}</option>
    })

    return(
      <fieldset className="guess-field">
        <legend>Guess Person</legend>
        <form>
          <select className="guess-element" selected="default">
            <option value="default">Select a character</option>
            {characters}
          </select>
          <input className="guess-element" type="submit" value="GO"/>
        </form>
      </fieldset>
    );
  }

}

export default GuessPerson;
