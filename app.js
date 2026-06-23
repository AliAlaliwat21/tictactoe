/*-------------------------------- Constants --------------------------------*/
const choicesArr =[]
/*-------------------------------- Variables --------------------------------*/
let currentPlayer="X"
/*------------------------ Cached Element References ------------------------*/
const sqrs = document.querySelectorAll('.sqr')
const boards = document.querySelector('.board')
let message = document.querySelector('#message')
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
}
)})

/*-------------------------------- Functions --------------------------------*/