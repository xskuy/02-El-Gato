export const saveGameToStorage = ({ board, turn }) => {
  window.localStorage.getItem("board", JSON.stringify(board));
  window.localStorage.getItem("turn", turn);
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
