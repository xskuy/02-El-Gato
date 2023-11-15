import PropTypes from 'prop-types'

export const Square = ({ children, isSelect, updateBoard, index }) => {

  const className = `square ${isSelect ? `is-selected` : ``}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.node,
  isSelect: PropTypes.bool,
  updateBoard: PropTypes.func,
  index: PropTypes.number
};