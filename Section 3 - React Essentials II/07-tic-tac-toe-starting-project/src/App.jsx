import Player from "./components/Player";

function App() {

  return (
    <>
      <main>
        <div id="game-container">
          {/* We go with <ol>, since player turns are IMPORTANT */}
          <ol id="players">
            <Player name="Player-1" symbol="X" />
            <Player name="Player-2" symbol="O" />
          </ol>
          Game Board
        </div>
        Logs
      </main>
    </>
  )
}

export default App
