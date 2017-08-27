import React from 'react';
import attributes from "./../models/attributes";

class GuessAttribute extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    const attributesAsOptions = Object.keys(attributes).map((attribute, index) => {
      return <option key={index} value={attribute}>{attribute}</option>
    });

    return (
      <fieldset className="guess-field">
        <legend>Guess Attribute</legend>
        <form>
          <select className="guess-element" selected={"default"}>
            <option value="default">Pick an attribute</option>
            {attributesAsOptions}
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
