/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie




/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector('.sqr')
const messageEl = document.querySelector('.message')


console.log(squareEls)
console.log(messageEl)




/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log('game check')
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X'
    winner = false
    tie = false
    render()
}

function render() {
    updateBoard()
    updateMessage()

}

function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        squareEls[i].textContent = board[i]
        // it works in this way 
        //board                 squareEls
      // 0 → X           --->   Square 0
      // take the value of the board and display it in the correct sequare

    }
}



function updateMessage() {
    if (winner && tie) {
        messageEl.textContent = `its ${turn} turn`
    }
    else if (winner && !tie) {
        messageEl.textContent = 'its a tie'
    }
    else{
        'you win'
    }
}


/*----------------------------- Event Listeners -----------------------------*/



