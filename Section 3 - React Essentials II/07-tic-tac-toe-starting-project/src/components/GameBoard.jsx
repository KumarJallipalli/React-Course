import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard({ onSelectCell, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleCellClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // Deep copy to avoid mutating state directly
            const updatedGameBoard = prevGameBoard.map(row => [...row]); 
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        });
        onSelectCell();
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => <li key={rowIndex} >
                    <ol>
                        {
                            row.map((cellData, colIndex) => <li key={colIndex} >
                                <button onClick={() => handleCellClick(rowIndex, colIndex)} >{cellData}</button>
                            </li>)
                        }
                    </ol>
                </li>)
            }
        </ol>
    )
}

export default GameBoard;