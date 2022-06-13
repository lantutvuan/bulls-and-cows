const historyBlock = document.querySelector('.history-block')
const input = document.querySelector('.input')
const button = document.querySelector('.button')
const bulls = document.querySelector('.check-bulls')
const cows = document.querySelector('.check-cows')
const checkNums = document.querySelector('.check-numbers')
const firstPlayerNumber = sessionStorage.getItem("firstPlayerNumber")
const secondPlayerNumber = '5678'.split("")


button.addEventListener('click', function(){
    countBullsAndCowsAndDisplay()
})

function countBullsAndCowsAndDisplay() {

    let bullsAmount = 0;
    let cowsAmount = 0;

    let check = (input.value).split("")
    check = sortDuplicates(check)

    for (let i = 0; i < check.length; i++) {
        if (firstPlayerNumber.includes(check[i])) {
            if (i == firstPlayerNumber.indexOf(check[i])) {
                bullsAmount++
            }
            else {
                cowsAmount++
            }
        }
    }

    displayCheck(bullsAmount, cowsAmount)

}

function sortDuplicates(arr) {
    let set = new Set(arr);
    return [...set]
}

function displayCheck(bullsAmount, cowsAmount) {

    let winner = ''

    if (bullsAmount == 4) {
        alert("You've won")
        winner = "\nWinner!"
    }
    const div = document.createElement("div")
    const span1 = document.createElement("span")
    span1.append(input.value)
    const span2 = document.createElement("span")
    span2.append(bullsAmount)
    const span3 = document.createElement("span")
    span3.append(cowsAmount)
    div.append(span1, " - ", span2, "б ", span3, "к", winner)
    historyBlock.append(div) 
}
