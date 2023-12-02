const gameBoard = (function () {
  let ticTacToeBoard = Array(9).fill("");
  let round = 0;

  function playRound() {}

  function addMark(index) {
    if (ticTacToeBoard[index] === "") {
      ticTacToeBoard[index] = getCurrentPlayer();
      checkCondition();
      round++;
      render();
    }
  }

  function resetBoard() {
    ticTacToeBoard = Array(9).fill("");
    round = 0;
  }

  function render() {
    console.log(ticTacToeBoard.slice(0, 3).join(" | "));
    console.log("---------");
    console.log(ticTacToeBoard.slice(3, 6).join(" | "));
    console.log("---------");
    console.log(ticTacToeBoard.slice(6).join(" | "));
  }

  function lockBoard() {}

  function returnBoard() {
    return ticTacToeBoard.slice();
  }

  function getCurrentPlayer() {
    if (round % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
  }

  function checkCondition() {
    if (
      (ticTacToeBoard[0] === ticTacToeBoard[1] &&
        ticTacToeBoard[1] === ticTacToeBoard[2] &&
        ticTacToeBoard[1] != "") ||
      (ticTacToeBoard[3] === ticTacToeBoard[4] &&
        ticTacToeBoard[4] === ticTacToeBoard[5] &&
        ticTacToeBoard[4] != "") ||
      (ticTacToeBoard[6] === ticTacToeBoard[7] &&
        ticTacToeBoard[7] === ticTacToeBoard[8] &&
        ticTacToeBoard[7] != "") ||
      (ticTacToeBoard[0] === ticTacToeBoard[3] &&
        ticTacToeBoard[3] === ticTacToeBoard[6] &&
        ticTacToeBoard[3] != "") ||
      (ticTacToeBoard[1] === ticTacToeBoard[4] &&
        ticTacToeBoard[4] === ticTacToeBoard[7] &&
        ticTacToeBoard[4] != "") ||
      (ticTacToeBoard[2] === ticTacToeBoard[5] &&
        ticTacToeBoard[5] === ticTacToeBoard[8] &&
        ticTacToeBoard[5] != "") ||
      (ticTacToeBoard[0] === ticTacToeBoard[4] &&
        ticTacToeBoard[4] === ticTacToeBoard[8] &&
        ticTacToeBoard[4] != "") ||
      (ticTacToeBoard[2] === ticTacToeBoard[4] &&
        ticTacToeBoard[4] === ticTacToeBoard[6] &&
        ticTacToeBoard[4] != "")
    ) {
      console.log(getCurrentPlayer() + " Wins the game!");
      lockBoard();
    }
  }
  return {
    addMark: addMark,
    returnBoard: returnBoard,
    resetBoard: resetBoard,
    render: render,
  };
})();
