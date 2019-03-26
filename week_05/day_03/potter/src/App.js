import React, { Component } from 'react';
import logo from './logo.svg';
import houses from './DB'
import House from './House'
import Character from './Character'
import './App.css';

class App extends Component {
  render() {

    const allHouses = houses.map(house => {
      return <House house={house} />
    })

    const allCharacters = houses.map(house => {
      return <Character char={house.notableCharacter} houseName={house.houseName} />
    })

    return (
      <div>
        <h1>Houses</h1>
        {allHouses}
        <div className="clear"></div>
        <h1>Characters</h1>
        {allCharacters}
      </div>
    );
  }
}

export default App;
