let cards = [];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("card-el");
messageEl;
function getRandomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num === 1) {
    return 11;
  } else if (num <= 13 && num >= 11) {
    return 10;
  } else {
    return num;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum : " + sum;
  cardEl.textContent = "Cards : ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (Alive === true and hasBlackJack === false){
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
}

console.log(message);
