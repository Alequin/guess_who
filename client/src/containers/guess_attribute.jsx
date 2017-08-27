import React from 'react';

class GuessAttribute extends React.Component{

  render(){
    return(
      <fieldset className="guess-field">
        <legend>Guess Attribute</legend>
        <form>
          <select className="guess-element" selected={"default"}>
            <option value="default">Pick an attribute</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
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

export default GuessAttribute;
