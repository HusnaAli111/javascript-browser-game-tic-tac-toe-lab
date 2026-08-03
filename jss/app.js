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
function init (){
    console.log('game check')
    board =['','','','','','','','','']
    turn = 'X'
    winner = false
    tie = false
    render()
}

function render (){

}




/*----------------------------- Event Listeners -----------------------------*/



