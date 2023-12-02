const gameBoard = (function () {
  const gridItems = document.querySelectorAll(".grid-item");
  const resetButton = document.getElementById("reset");
  let ticTacToeBoard = Array(9).fill("");
  let round = 0;
  let roundIsActive = true;

  function playRound(){
    gridItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          addMark(index);
        });
      });
    resetButton.addEventListener("click", resetBoard);
  }

  function addMark(index) {
    if (roundIsActive) {
      if (ticTacToeBoard[index] === "") {
        ticTacToeBoard[index] = getCurrentPlayer();
        checkCondition();
        round++;
        render();
      }
    }
  }


  function resetBoard() {
    ticTacToeBoard = Array(9).fill("");
    round = 0;
    roundIsActive = true;
    render();
  }

  function render() {
    gridItems.forEach((item, index) => {
      item.textContent = ticTacToeBoard[index];
    });
  }

  function lockBoard() {
    roundIsActive = false;
  }

//   function returnBoard() {
//     return ticTacToeBoard.slice();
//   }

  function getCurrentPlayer() {
    if (round % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
  }

  function drawBoard(event) {}

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

  playRound();

  return {
    addMark: addMark,
    // returnBoard: returnBoard,
    resetBoard: resetBoard,
    render: render,
  };
})();
