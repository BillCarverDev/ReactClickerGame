import React from 'react';

const header = (props) => {
    return (

        <header className="App-header">
          <img src={props.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky React Game</h1>
        </header>
    )
}

export default header