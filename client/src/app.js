import React from 'react';
import ReactDOM from 'react-dom';

import GuessWho from "./containers/guess_who";
import characters from "./models/characters";

window.onload = function(){
  console.log("out: ", characters);
  ReactDOM.render(
    <GuessWho/>,
    document.getElementById('app')
  );
}
