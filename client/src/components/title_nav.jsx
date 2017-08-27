import React from 'react';

class TitleNav extends React.Component{

  render(){
    return(
      <nav className="title-nav">
        <div className="container">
          <h1>Guess Who</h1>
          <button>New Game</button>
        </div>
      </nav>
    );
  }

}

export default TitleNav;
