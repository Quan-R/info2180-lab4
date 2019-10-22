
var score = {'X': 0,    'O': 0};
var moves = 0;
var turn = [];
document.addEventListener('DOMContentLoaded', loadBoard);

   
    function loadBoard(){
        var board = document.getElementById("board");
        var squares = board.children; 
        for(let i=0; i<squares.length; i++){
            squares[i].classList.add("square");
        }
        for(let i=0; i<squares.length; i++){
            squares[i].onmouseover = function(){squares[i].classList.toggle("hover",true)}
            squares[i].onmouseout = function(){squares[i].classList.toggle("hover",false)}
        }
        for(let i=0; i<squares.length; i++){
            if(turn.length==0){
                squares[i].classList.add("X");
                squares[i].innerHTML = ("X");
                gameState.push("X");
            }
            else{
                if(turn[turn.length-1]==-'X'){
                    squares[i].classList.add("O");
                    squares[i].innerHTML=("O");
                    turn.push("O");
                }
                else{
                    squares[i].classList.add("O");
                    squares[i].innerHTML=("X");
                    turn.push("X");
                }
            }
        }
    }

    
