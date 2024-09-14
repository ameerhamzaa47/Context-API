import React from 'react';
import { CommonContext } from './CommonContext';
function Main() {
    return (
        <>
            <CommonContext.Consumer>
                {({ color, setColor }) => (
            <>
              <h1 style={{ color: color, }}>This is Main Page.</h1>
              <button onClick={() => setColor('blue')}>Change Color to Blue</button>
              <button onClick={() => setColor('red')}>Change Color to Red</button>
              <button onClick={() => setColor('yellow')}>Change Color to Yellow</button>
            </>
          )}
            </CommonContext.Consumer>
        </>
    );
}

export default Main;


// Context API With Class Component

/*import React, { Component } from 'react';
import { CommonContext } from './CommonContext';

class Main extends Component {
  render() {
    return (
      <>
        <CommonContext.Consumer>
          {
          ({ color, updateColor }) => (
            <>
              <h1 style={{ color: color }}>Hello, this is the main page.</h1>
              <button onClick={()=>updateColor('yellow')}>Change Into Yellow Color</button>
              <button onClick={()=>updateColor('red')}>Change Into Red Color</button>
            </>
          )
          }
        </CommonContext.Consumer>
      </>
    );
  }
}

export default Main;*/