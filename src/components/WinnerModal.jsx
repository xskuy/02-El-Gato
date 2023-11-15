import { Square } from "./Square";
import PropTypes from 'prop-types';


export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? 'Empate' : 'Gano';
  const equalText = winner === false ? <h2>Por favor iniciar otro juego</h2> : <Square>{winner}</Square>;

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <header className='win'>{equalText}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo </button>
        </footer>
      </div>
    </section>
  )
}

WinnerModal.propTypes = {
  winner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node
  ]),
  resetGame: PropTypes.func.isRequired
};