import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
// ----->
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { GatoGame } from './components/GatoGame'
import { saveGameToStorage, resetGameStorage } from './login'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStore = window.localStorage.getItem('board')
    return boardFromStore ? JSON.parse(boardFromStore) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // Aqui le decimos que si hay algun objeto dentro no haga nada
    if (board[index] || winner) return
    // aqui creamos una nueva array de boar que seria 'newBoard'
    const newBoard = [...board]
    newBoard[index] = turn // le decimos que newBoard es [index] que se lo pasamos como parametro
    setBoard(newBoard)
    // cambiar el turtno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar partoda
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>El Gato</h1>
      <button onClick={resetGame}>Reset del jeugo</button>
      <section className='game'>
        <GatoGame updateBoard={updateBoard} board={board} />
      </section>
      <section className='turn'>
        <Square isSelect={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelect={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main >
  )
}

export default App
