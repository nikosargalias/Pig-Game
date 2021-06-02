// const totalScores = new WeakMap();

const players = [
  {
    totalScore: document.getElementById("player-1__score"),
    accScore: document.getElementById("player-1-accumulated"),
    bg: document.getElementById("player-1-bg"),
    heading: document.getElementById("player-1-heading"),
    // set updateScore(accScore) {
    //   if (totalScores.get(this)) {
    //     totalScores.set(this, {
    //       total: totalScores.get(this).total + accScore,
    //     });
    //   } else {
    //     totalScores.set(this, {
    //       total: accScore,
    //     });
    //   }
    // },
    // get totalScore() {
    //   const { total } = totalScores.get(this) || 0;
    //   return total !== 0 ? total : 0;
    // },
  },
  {
    totalScore: document.getElementById("player-2__score"),
    accScore: document.getElementById("player-2-accumulated"),
    bg: document.getElementById("player-2-bg"),
    heading: document.getElementById("player-2-heading"),
  },
];

// players[0].updateScore = 80;
// console.log(players[0].totalScore);

export { players };
