import React, { useState } from 'react';

interface BoardProps {
  board: string[][];
  onClick: (row: number, column: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => (
  <div className='row'> {/* Use 'row' instead of 'board' */}
    {board.map((row, rowIndex) => (
      <div className='row' key={rowIndex}>
        {row.map((cell, columnIndex) => (
          <div key={columnIndex} className='colum' onClick={() => onClick(rowIndex, columnIndex)}> {/* Use 'colum' instead of 'cell' */}
            {cell}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const TicTacToe2: React.FC = () => {
  const initialBoard = Array.from({ length: 3 }, () => Array(3).fill(''));
  const [board, setBoard] = useState<string[][]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [isWin, setIsWin] = useState(false);

  const checkForWin = (currentBoard: string[][]) => {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
      if (
        currentBoard[i][0] === currentPlayer &&
        currentBoard[i][1] === currentPlayer &&
        currentBoard[i][2] === currentPlayer
      ) {
        return true; // Check rows
      }
      if (
        currentBoard[0][i] === currentPlayer &&
        currentBoard[1][i] === currentPlayer &&
        currentBoard[2][i] === currentPlayer
      ) {
        return true; // Check columns
      }
    }
    // Check diagonals
    if (
      currentBoard[0][0] === currentPlayer &&
      currentBoard[1][1] === currentPlayer &&
      currentBoard[2][2] === currentPlayer
    ) {
      return true; // Diagonal from top-left to bottom-right
    }
    if (
      currentBoard[0][2] === currentPlayer &&
      currentBoard[1][1] === currentPlayer &&
      currentBoard[2][0] === currentPlayer
    ) {
      return true; // Diagonal from top-right to bottom-left
    }

    return false;
  };

  const handleClick = (row: number, column: number) => {
    if (!board[row][column] && !isWin) {
      const newBoard = board.map((r) => [...r]);
      newBoard[row][column] = currentPlayer;
      setBoard(newBoard);
      if (checkForWin(newBoard)) {
        setIsWin(true);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setIsWin(false);
  };

  return (
    <>
      <div className='Restart' onClick={handleRestart}>
        <h1>Restart</h1>
      </div>

      {isWin ? (
        <div>
          <h1>The Winner is {currentPlayer}</h1>
        </div>
      ) : (
        <Board board={board} onClick={handleClick} />
      )}
    </>
  );
};

export default TicTacToe2;
