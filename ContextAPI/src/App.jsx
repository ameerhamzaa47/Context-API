import React, { useState } from 'react';
import { CommonContext } from './ComponentContextAPI/CommonContext';
import './App.css';
import Main from './ComponentContextAPI/Main';
import DropDown from './ComponentContextAPI/textDropDown';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './ComponentContextAPI/Header';
import Menu from './ComponentContextAPI/PFirstPage';
import Location from './ComponentContextAPI/Location';


function App() {
  const [color, setColor] = useState("green");

  const setToRed = (getColor) => {
    setColor(getColor);
  };

  return (
    <>
      <CommonContext.Provider value={{ color, setColor }}>
        <h1>Hamza</h1>
        <Main />
      </CommonContext.Provider>
      <DropDown/>
      <hr/>
      <BrowserRouter>
      <Routes>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/location' element={<Location/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// Context API With Class Component

/* import React, { Component } from 'react';
import Main from './ComponentContextAPI/Main';
import { CommonContext } from './ComponentContextAPI/CommonContext';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 'green',
      updateColor: this.updateColor,
    };
  }

  updateColor = (color) => {
    this.setState({
      color: color,
    });
  }

  render() {
    return (
      <>
        <CommonContext.Provider value={this.state}>
          <h1>Ameer Hamza</h1>
          <p>Context API Example</p>
          <Main />
        </CommonContext.Provider>
      </>
    );
  }
}

export default App; */