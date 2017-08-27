import React from 'react';
import attributes from "./../models/attributes";

class GuessAttribute extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedAttribute: "default",
      subAttributes: [],
      selectedSubAttribute: "default"
    }
    this.handleOnAttributeChange = this.handleOnAttributeChange.bind(this);
    this.handleOnSubAttributeChange = this.handleOnSubAttributeChange.bind(this);
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
      selectedSubAttribute: "default"
    });
  }

  handleOnSubAttributeChange(event){
    this.setState({
      selectedSubAttribute: event.target.value
    });
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

    console.log(this.state.selectedSubAttribute);

    return (
      <fieldset className="guess-field">
        <legend>Guess Attribute</legend>
        <form>
          <select
            className="guess-element"
            value={this.state.selectedAttribute}
            onChange={this.handleOnAttributeChange}>
            <option value={"default"}>Pick an attribute</option>
            {attributesAsOptions}
          </select>
          <select
            className="guess-element"
            value={this.state.selectedSubAttribute}
            onChange={this.handleOnSubAttributeChange}>
            <option disabled value={"default"}>{subAttributesDefaultOption}</option>
            {subAttributesAsOptions}
          </select>
          <input className="guess-element" type="submit" value="GO"/>
        </form>
      </fieldset>
    );
  }

}

export default GuessAttribute;
