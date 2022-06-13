const firstPlayerNumber = sessionStorage.getItem("firstPlayerNumber")
console.log(firstPlayerNumber)
const historyBlock = document.querySelector('.history-block')
const input = document.querySelector('.input')
const button = document.querySelector('.button')
const bulls = document.querySelector('.check-bulls')
const cows = document.querySelector('.check-cows')
let checksCounter = makeCounter()

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      button.click();
    }
  });

button.addEventListener('click', function(){
    checksCounter()
    displayCheck()
    input.value = ""
})

function makeCounter() {
    let counter = 0;
    return function count() {
        return counter++
    }
}

function countBullsAndCows() {

    let bullsAmount = 0;
    let cowsAmount = 0;

    let check = (input.value).split("")
    // check = sortDuplicates(check)

    for (let i = 0; i < check.length; i++) {
        if (firstPlayerNumber.includes(check[i])) {
            if (i == firstPlayerNumber.indexOf(check[i], i)) {
                bullsAmount++
            }
            else {
                cowsAmount++
            }
        }
    }

    return [bullsAmount, cowsAmount]

}

function sortDuplicates(arr) {
    let set = new Set(arr);
    return [...set]
}

function displayCheck() {

    let [bullsAmount, cowsAmount] = countBullsAndCows()

    let isWinner = false

    if (bullsAmount == 4) {
        isWinner = true
    }

    const div = document.createElement("div")
    const span1 = document.createElement("span")
    span1.append(input.value)
    const span2 = document.createElement("span")
    span2.append(bullsAmount)
    const span3 = document.createElement("span")
    span3.append(cowsAmount)
    div.append(span1, " – ", span2, "b ", span3, "c")
    if (isWinner) {
        div.append(" Winner!")
        alert(`You've won in ${checksCounter()} moves`)
        
    }
    
    
    historyBlock.append(div) 
}
