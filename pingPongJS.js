const p1Button = document.querySelector('#player-one');
const p2Button = document.querySelector('#player-two');
const resetBtn = document.querySelector("#reset");
let winningScoreSelect = document.querySelector("#playing-to");


let playerOne = document.querySelector("#player-one-score");
let playerTwo = document.querySelector("#player-two-score");

let playerOneScore = parseInt(document.querySelector("#player-one-score").textContent);
let playerTwoScore = parseInt(document.querySelector("#player-two-score").textContent);

let winningScore = 3;
let isGameOver = false;


//max turns selector change function
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

//inccrementing scores
function updateScore(player, opponent) {
    if (!isGameOver) {
        let score = player.innerHTML;
        score++;
        player.innerHTML = score;

        if (score === winningScore) {
            isGameOver = true;
            player.classList.add("winner");
            opponent.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
}

p1Button.addEventListener("click", function () {
    updateScore(playerOne, playerTwo)
});

p2Button.addEventListener("click", function () {
    updateScore(playerTwo, playerOne)
});

resetBtn.addEventListener("click", reset);

function reset() {
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    isGameOver = false;
    playerOne.classList.remove("winner", "loser");
    playerTwo.classList.remove("winner", "loser");
}