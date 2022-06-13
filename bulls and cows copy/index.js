const input2 = document.querySelector('.input')
const button2 = document.querySelector('.button')
let firstPlayerNumber = '';

button2.addEventListener('click', function() {
    firstPlayerNumber = input2.value;
    store(firstPlayerNumber)
})

function store (value) {
   
    // (B) SAVE TO SESSION STORAGE
    // (B1) FLAT STRING OR NUMBER
    // SESSIONSTORAGE.SETITEM("KEY", "VALUE");
    sessionStorage.setItem("firstPlayerNumber", value);
   
    // (C) REDIRECT
    location.href = "game.html";
    // window.open("1b-session.html");
  }