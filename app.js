/*-------------------------------- Constants --------------------------------*/
const choicesArr =[]
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
        if(box.textContent === ''){
        box.textContent = currentPlayer
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }
        else if(currentPlayer ===  'O'){
            currentPlayer = 'X'
        }
    }
        message.textContent = `It's ${currentPlayer}'s Turn`
    resety.addEventListener('click', function() {
    currentPlayer = 'X'
    sqrs.forEach(function(box) {
        box.textContent = ''
    
    message.textContent = `It's ${currentPlayer}'s Turn`
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