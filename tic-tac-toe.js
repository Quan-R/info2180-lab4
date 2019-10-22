
document.addEventListener('DOMContentLoaded', loadBoard);
var turn = [];

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
            squares[i].onclick = function(){
                if(turn.length==0){
                    squares[i].classList.toggle("O",false);
                    squares[i].innerHTML = ("X");
                    squares[i].classList.toggle("X",true);
                    turn.push("X");
                    checkBoard(squares);
                }
                else{
                    if(turn[turn.length-1]=='X'){
                        squares[i].classList.toggle("X", false);
                        squares[i].innerHTML=("O");
                        squares[i].classList.toggle("O", true);
                        turn.push("O");
                        checkBoard(squares);
                    }
                    else{
                        squares[i].classList.add("X");
                        squares[i].innerHTML=("X");
                        turn.push("X");
                        checkBoard(squares);
                    }
                }
            }
            makeUnselectable(squares[i]);
            document.getElementsByClassName("btn")[0].onclick = function(){
                for(let i = 0; i < squares.length; i++){
                    squares[i].innerHTML = ("")
            }
            document.getElementById("status").classList.remove("you-won")
            document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
            makeUnselectable(document.getElementById("status"))
        }
        }
        function makeUnselectable(node) {
            if (node.nodeType == 1) {
                node.setAttribute("unselectable", "on");
            }
            var child = node.firstChild;
            while (child) {
                makeUnselectable(child);
                child = child.nextSibling;
            }
        }
        function makeUnselectable(node) {
            if (node.nodeType == 1) {
                node.setAttribute("unselectable", "on");
            }
            var child = node.firstChild;
            while (child) {
                makeUnselectable(child);
                child = child.nextSibling;
            }
        }
        function checkBoard(arra){
            if (arra[0].innerHTML !== "" && arra[0].innerHTML === arra[1].innerHTML && arra[0].innerHTML === arra[2].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML =   "Congratulations! "+ arra[0].innerHTML + " is the Winner!"
             }
             else if (arra[3].innerHTML !== "" && arra[3].innerHTML === arra[4].innerHTML && arra[3].innerHTML === arra[5].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arra[3].innerHTML + " is the Winner!"
             }
             else if (arra[6].innerHTML !== "" && arra[6].innerHTML === arra[7].innerHTML && arra[6].innerHTML === arra[8].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arra[6].innerHTML + " is the Winner!"
             }
             else if (arra[0].innerHTML !== "" && arra[0].innerHTML === arra[3].innerHTML && arra[0].innerHTML === arra[6].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arra[0].innerHTML + " is the Winner!"
             }
             else if (arra[1].innerHTML !== "" && arra[1].innerHTML === arra[4].innerHTML && arra[1].innerHTML === arra[7].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arra[1].innerHTML + " is the Winner!"
             }
             else if (arra[0].innerHTML !== "" && arra[0].innerHTML === arra[4].innerHTML && arra[0].innerHTML === arra[8].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arra[0].innerHTML + " is the Winner!"
             }
             else if (arra[6].innerHTML !== "" && arra[6].innerHTML === arra[4].innerHTML && arra[6].innerHTML === arra[2].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML =  "Congratulations! "+ arra[6].innerHTML + " is the Winner!"
             }
             else if (arra[2].innerHTML !== "" && arra[2].innerHTML === arra[5].innerHTML && arra[2].innerHTML === arra[8].innerHTML){
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arra[2].innerHTML + " is the Winner!"
             }
        
    }
    }

    
