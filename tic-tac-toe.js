
window.onload=function(){
        this.loadBoard()
    
    }
    function loadBoard(){
        var board = document.querySelectorAll('#board div');
        for(i=0; i<board.length; i++){
            board[i].className = "square";
        }
    }
    
