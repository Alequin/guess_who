import React from 'react';
import attributes from "./../models/attributes";

const DEFAULT = "default"

class GuessAttribute extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedAttribute: DEFAULT,
      subAttributes: [],
      selectedSubAttribute: DEFAULT
    }
    this.handleOnAttributeChange = this.handleOnAttributeChange.bind(this);
    this.handleOnSubAttributeChange = this.handleOnSubAttributeChange.bind(this);
    this.handleOnClickGo = this.handleOnClickGo.bind(this);
  }

  handleOnAttributeChange(event){

    const selected = event.target.value;
    const subAttributes = Object.keys(attributes[selected]);

    if(subAttributes.length <= 0){
      subAttributes.push("Has");
      subAttributes.push("Does Not Have");
    }

    this.setState({
      selectedAttribute: selected,
      subAttributes: subAttributes,
      selectedSubAttribute: DEFAULT
    });
  }

  handleOnSubAttributeChange(event){
    this.setState({
      selectedSubAttribute: event.target.value
    });
  }

  handleOnClickGo(event){
    event.preventDefault();
    if(this.state.selectedSubAttribute ===  DEFAULT){
      alert("Please select an attribute and a sub attribute");
      return;
    }

    const guess = {
      attribute: this.state.selectedAttribute,
      subAttribute: this.state.selectedSubAttribute,
      subAttributeObject: attributes[this.state.selectedAttribute][this.state.selectedSubAttribute]
    }

    this.props.makeAttributeGuess(guess);
  }

  render(){

    const attributesAsOptions = Object.keys(attributes).map((attribute, index) => {
      return <option key={index} value={attribute}>{attribute}</option>
    });

    const subAttributesAsOptions = this.state.subAttributes.map((attribute, index) => {
      return <option key={index} value={attribute}>{attribute}</option>
    });

    let subAttributesDefaultOption = "Select a sub attribute";
    if(subAttributesAsOptions.length <= 0){
      subAttributesDefaultOption = ""
    }

    return (
      <fieldset className="guess-field">
        <legend>Guess Attribute</legend>
        <form>
          <select
            className="guess-element"
            value={this.state.selectedAttribute}
            onChange={this.handleOnAttributeChange}>
            <option value={DEFAULT}>Pick an attribute</option>
            {attributesAsOptions}
          </select>
          <select
            className="guess-element"
            value={this.state.selectedSubAttribute}
            onChange={this.handleOnSubAttributeChange}>
            <option disabled value={DEFAULT}>{subAttributesDefaultOption}</option>
            {subAttributesAsOptions}
          </select>
          <input onClick={this.handleOnClickGo} className="guess-element" type="submit" value="GO"/>
        </form>
      </fieldset>
    );
  }

}

export default GuessAttribute;
