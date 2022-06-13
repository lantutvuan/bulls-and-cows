const AMOUNT_OF_DIGITS = 4;

const inputOpponent = document.querySelector('.input-opponent')
console.log(inputOpponent)
const btnOpponent = document.querySelector('.btn-opponent')
const btnRandom = document.querySelector('.btn-random')
let firstPlayerNumber = '';

btnRandom.addEventListener('click', function() {
    passTheNumber(getRandomNumber())
})

btnOpponent.addEventListener('click', function() {
    console.log(inputOpponent)
    firstPlayerNumber = inputOpponent.value;
    passTheNumber(firstPlayerNumber)
})

function getRandomNumber() {
    let digits = []

    for (let i = 0; i < AMOUNT_OF_DIGITS; i++) {
        digits.push(getRandomDigit())
    }

    return digits.join("")
}

function getRandomDigit() {
    return Math.floor(Math.random()*10)
}

function passTheNumber (value) {
    sessionStorage.setItem("firstPlayerNumber", value);
    location.href = "game.html";
  }