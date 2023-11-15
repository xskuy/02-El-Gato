import { Square } from "./Square"

export function GatoGame({ updateBoard, board }) {
  return board.map((h, index) => {
    return (
      <Square
        key={index} index={index}
        updateBoard={updateBoard}>
        {board[index]}
      </Square>
    )
  })
}