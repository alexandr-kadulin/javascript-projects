const labels = ["X", "O"];
const reset = document.querySelector(".btn");
let sell1 = document.querySelector("#r0c0");
let sell2 = document.querySelector("#r0c1");
let sell3 = document.querySelector("#r0c2");
let sell4 = document.querySelector("#r1c0");
let sell5 = document.querySelector("#r1c1");
let sell6 = document.querySelector("#r1c2");
let sell7 = document.querySelector("#r2c0");
let sell8 = document.querySelector("#r2c1");
let sell9 = document.querySelector("#r2c2");
let index = 0;
let crossesScore = document.querySelector(".crosses span");
let noughtsScore = document.querySelector(".noughts span");

reset.addEventListener("click", () => {
  crossesScore.innerHTML = 0;
  noughtsScore.innerHTML = 0;
  let sells = [sell1, sell2, sell3, sell4, sell5, sell6, sell7, sell8, sell9];
  sells.forEach((sell) => (sell.innerHTML = ""));
});

const updateCrossesScore = () => {
  newValue = parseFloat(crossesScore.innerHTML) + 1;
  crossesScore.innerHTML = newValue;
};

const updateNoughtsScore = () => {
  newValue = parseFloat(noughtsScore.innerHTML) + 1;
  noughtsScore.innerHTML = newValue;
};

const resetBoard = () => {
  for (let index = 0; index < 3; index++) {
    for (let jIndex = 0; jIndex < 3; jIndex++) {
      document.getElementById("r" + index + "c" + jIndex).innerHTML = "";
    }
  }
};

const step = (sell) => {
  if (sell.innerHTML === "") {
    sell.innerHTML = labels[index];
    index = 1 - index;
  }
  if (
    sell1.innerHTML === sell2.innerHTML &&
    sell2.innerHTML === sell3.innerHTML &&
    sell1.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell1.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  }
  if (
    sell4.innerHTML === sell5.innerHTML &&
    sell5.innerHTML === sell6.innerHTML &&
    sell4.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell4.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  } else if (
    sell7.innerHTML === sell8.innerHTML &&
    sell8.innerHTML === sell9.innerHTML &&
    sell7.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell7.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  } else if (
    sell1.innerHTML === sell4.innerHTML &&
    sell4.innerHTML === sell7.innerHTML &&
    sell1.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell1.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  } else if (
    sell2.innerHTML === sell5.innerHTML &&
    sell5.innerHTML === sell8.innerHTML &&
    sell2.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell2.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  } else if (
    sell3.innerHTML === sell6.innerHTML &&
    sell6.innerHTML === sell9.innerHTML &&
    sell3.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell3.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  } else if (
    sell1.innerHTML === sell5.innerHTML &&
    sell5.innerHTML === sell9.innerHTML &&
    sell1.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell1.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  } else if (
    sell7.innerHTML === sell5.innerHTML &&
    sell5.innerHTML === sell3.innerHTML &&
    sell7.innerHTML !== ""
  ) {
    setTimeout(() => {
      if (sell7.innerHTML === labels[0]) {
        alert(`Congrats! Crosses Won!`);
        updateCrossesScore();
      } else {
        alert(`Congrats! Noughts Won!`);
        updateNoughtsScore();
      }
      resetBoard();
    }, 50);
  } else if (
    sell1.innerHTML !== "" &&
    sell2.innerHTML !== "" &&
    sell3.innerHTML !== "" &&
    sell4.innerHTML !== "" &&
    sell5.innerHTML !== "" &&
    sell6.innerHTML !== "" &&
    sell7.innerHTML !== "" &&
    sell8.innerHTML !== "" &&
    sell9.innerHTML !== ""
  ) {
    setTimeout(() => {
      alert(`Draw!`);
      resetBoard();
    }, 50);
  }
};
