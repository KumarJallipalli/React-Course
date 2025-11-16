import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  // Function to toggle active player
  function handleTogglePlayer() {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  }

  return (
    <>
      <main>
        <div id="game-container">
          {/* We go with <ol>, since player turns are IMPORTANT */}
          <ol id="players" className="highlight-player">
            <Player name="Player-1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player name="Player-2" symbol="O" isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectCell={handleTogglePlayer} activePlayerSymbol={activePlayer}/>
        </div>
        Logs
      </main>
    </>
  )
}

export default App
