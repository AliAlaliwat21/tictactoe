/*-------------------------------- Constants --------------------------------*/
const choicesArr =[]
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let winner = false
/*-------------------------------- Variables --------------------------------*/
let currentPlayer="X"
/*------------------------ Cached Element References ------------------------*/
const sqrs = document.querySelectorAll('.sqr')
const boards = document.querySelector('.board')
let message = document.querySelector('#message')
let resety = document.querySelector('#reset-button')
/*----------------------------- Event Listeners -----------------------------*/
sqrs.forEach(function(box) {
    box.addEventListener('click', function(){
        if(box.textContent === '' && winner === false) {
        box.textContent = currentPlayer

    checkWinner()

if (winner === true) {
  message.textContent = `${currentPlayer} wins! Loser is obliterated`
  return
}

        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }
        else if(currentPlayer ===  'O'){
            currentPlayer = 'X'
        }
    }
        message.textContent = `It's ${currentPlayer}'s Turn!!!`
    resety.addEventListener('click', function() {
    currentPlayer = 'X'
    sqrs.forEach(function(box) {
        box.textContent = ''
    winner = false
    message.textContent = `It's ${currentPlayer}'s Turn!!!`
// message.textContent = `It's ${currentPlayer}'s turn`
// }
// resety.addEventListener('click', function(){
//     currentPlayer = ''
//     box.textContent = currentPlayer

// })
    }
    
)})

    })})
/*-------------------------------- Functions --------------------------------*/
function checkWinner() {
  winningCombos.forEach(function(combos) {
    const a = sqrs[combos[0]].textContent
    const b = sqrs[combos[1]].textContent
    const c = sqrs[combos[2]].textContent

    if (a !== '' && a === b && b === c) {
      winner = true
    }
  })
}