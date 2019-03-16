import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter basename="/Scoreboard">
      <div className="scoreboard">
          <Header />
          <PlayerList />
          <AddPlayerForm />
      </div>
    </BrowserRouter>
  );
}


export default App;
