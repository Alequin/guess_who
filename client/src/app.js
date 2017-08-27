import React from 'react';
import ReactDOM from 'react-dom';

import GuessWho from "./containers/guess_who"

window.onload = function(){
  ReactDOM.render(
    <GuessWho/>,
    document.getElementById('app')
  );
}
