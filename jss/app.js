/*-------------------------------- Constants --------------------------------*/
const winningCombos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]

]



/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie
let sequareclick




/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')


console.log(squareEls)
console.log(messageEl)




/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log('game check')
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'O'
    winner = false
    tie = false
    render()
}

function render() {
    checkForWinner()
    switchPlayerTurn()
    
    checkForTie()
    updateMessage()
    updateBoard()
    
    
    

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
    if (winner==false && tie==false) {
        messageEl.textContent = `its ${turn} turn`
    }
     
    if(winner==true&&winner==true){
         messageEl.textContent =`${turn} you WIN`
    }
    console.log(messageEl.textContent)
    
}

function handleClick(event){
    sequareclick=event.target.id
    //this is for when the sequare is not empty it return
    if (board[sequareclick] !== '') {
        return
    }
    if (winner === true) {
    return
}
// this is for if there is a winner also return which is stop
 placePiece(sequareclick)  
 render() 
 



}

function placePiece (index){
    board[index] = turn
    //update the board with the turn value

}

function checkForWinner(){
    //  for (let i = 0; i < winningCombos.length; i++) {

    //  }


    for(let oneCombo of winningCombos){
        if(board[oneCombo[0]] &&board[oneCombo[0]] === board[oneCombo[1]] && board[oneCombo[0]] === board[oneCombo[2]]){
            console.log('YOU WIN')
            winner = true
        }
    }

     if(!board[0].includes('')&&board[0]===board[1]&&board[0]===board[2]){
        winner=true
        // messageEl.textContent='you win'
     }
}

function checkForTie(){
    if (!winner &&!board.includes('')) {
        messageEl.textContent = 'its a tie'
    }
    
}
function switchPlayerTurn(){
    if (winner === true){
        return
    }
    if(turn=='O'){
        turn='X'
    }
    else if(turn=='X'){
        turn='O'
    }
}
init()



/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){
    square.addEventListener('click', handleClick)
})



