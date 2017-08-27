import React from 'react';

class GuessPerson extends React.Component{

  render(){
    return(
      <fieldset className="guess-field">
        <legend>Guess Person</legend>
        <form>
          <select className="guess-element">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <input className="guess-element" type="submit" value="GO"/>
        </form>
      </fieldset>
    );
  }

}

export default GuessPerson;
