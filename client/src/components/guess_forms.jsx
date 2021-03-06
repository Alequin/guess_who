import React from 'react';

import GuessPerson from "./../containers/guess_person";
import GuessAttribute from "./../containers/guess_attribute";

class GuessForms extends React.Component{

  render(){
    return(
      <section>
        <GuessPerson characters={this.props.characters}/>
        <GuessAttribute makeAttributeGuess={this.props.makeAttributeGuess}/>
      </section>
    );
  }

}

export default GuessForms;
