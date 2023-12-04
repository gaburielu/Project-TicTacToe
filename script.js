const gameBoard = (function () {
  const gridItems = document.querySelectorAll(".grid-item");
  const resetButton = document.getElementById("reset");
  const PlayerVsPlayerButton = document.getElementById("playeVplayer");
  const PlayerVsComputerButton = document.getElementById("playerVcomputer");
  const title = document.getElementById("title");

  let ticTacToeBoard = Array(9).fill("");
  let round = 0;
  let roundIsActive = true;
  let isPlayerVsComputer = false;

  /////////////////////////////////////////////////

  PlayerVsComputerButton.addEventListener("click", function () {
    if (isPlayerVsComputer === false) {
      isPlayerVsComputer = true;
      resetBoard();
    }
  });

  PlayerVsPlayerButton.addEventListener("click", function () {
    if (isPlayerVsComputer === true) {
      isPlayerVsComputer = false;
      resetBoard();
    }
  });

  resetButton.addEventListener("click", resetBoard);

  /////////////////////////////////////////////////

  function playRound() {
    gridItems.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        if (roundIsActive && ticTacToeBoard[index] === "") {
          item.textContent = getCurrentPlayer();
          item.style.opacity = 0.5;
        }
      });

      item.addEventListener("mouseout", () => {
        item.textContent = ticTacToeBoard[index];
        item.style.opacity = 1;
      });
      item.addEventListener("click", () => {
        addMark(index);
      });
    });
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
    resetButton.textContent = "Restart";
    title.textContent = "Tic Tac Toe";
    ticTacToeBoard = Array(9).fill("");
    round = 0;
    roundIsActive = true;
    render();
  }

  function render() {
    buttonGameModeDisplay();
    playerMarkerDisplay();
    computerMove();
  }

  function lockBoard() {
    resetButton.textContent = "Play again?";
    roundIsActive = false;
  }

  function getCurrentPlayer() {
    if (round % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
  }

  function computerPlay() {
    const emptySpots = ticTacToeBoard.reduce(
      (acc, val, index) => (val === "" ? acc.concat(index) : acc),
      []
    );
    const randomIndex =
      emptySpots[Math.floor(Math.random() * emptySpots.length)];
    addMark(randomIndex);
  }

  function computerMove() {
    if (isPlayerVsComputer) {
      if (getCurrentPlayer() === "O") {
        computerPlay();
      }
    }
  }

  function playerMarkerDisplay() {
    gridItems.forEach((item, index) => {
      item.textContent = ticTacToeBoard[index];
      item.style.opacity = 1;
      if (!roundIsActive || ticTacToeBoard[index] !== getCurrentPlayer()) {
        item.textContent = ticTacToeBoard[index];
      }

      if (item.textContent === "X") {
        item.style.color = "lightskyblue";
      } else if (item.textContent === "O") {
        item.style.color = "lightpink";
      } else {
        item.style.color = "";
      }
    });
  }

  function buttonGameModeDisplay() {
    if (isPlayerVsComputer === true) {
      PlayerVsComputerButton.classList.add("active");
      PlayerVsPlayerButton.classList.remove("active");
    } else {
      PlayerVsComputerButton.classList.remove("active");
      PlayerVsPlayerButton.classList.add("active");
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
      if (isPlayerVsComputer) {
        if (getCurrentPlayer() === "O") {
          title.textContent = `Computer Wins the game!`;
        } else {
          title.textContent = `Player Wins the game!`;
        }
      } else {
        title.textContent = `${getCurrentPlayer()} Wins the game!`;
      }
      lockBoard();
    } else {
      if (round === 8) {
        title.textContent = `It's a Draw!!`;
        lockBoard();
      }
    }
  }

  playRound();

  // return {
  //   addMark: addMark,
  //   resetBoard: resetBoard,
  //   render: render,
  // };
})();
