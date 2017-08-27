import React from 'react';

class GuessPerson extends React.Component{

  render(){
    return(
      <fieldset className="guess-field">
        <legend>Guess Attribute</legend>
        <form>
          <select>
            <option disabled selected="selected">Pick an attribute</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <input type="submit" value="GO"/>
        </form>
      </fieldset>
    );
  }

}

export default GuessPerson;
