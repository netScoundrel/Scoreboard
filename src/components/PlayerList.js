import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { ({ players, highScore}) => (
        <React.Fragment>
          {players.map( (player, index) =>
            <Player 
              key={player.id.toString()} 
              index={index}     
              isHighScore={highScore === player.score}      
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;