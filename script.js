function navCells(){
alert("Go to navCells");

for(i=1; i<=9; ++i)
	
		document.getElementById("sqr"+i).onlcick=
	function(){
		alert("you clicked me");
			}
	}
var turn = 0;
function playBox(){
	//alert("Hello World")
	if ((turn%2==0) && (turn<9))
		event.target.innerHTML="X";
	else if (!(turn%2==0) && (turn<9))
		event.target.innerHTML="O";
	else 
		alert("Game over no more moves")
	turn++

//	event.target.innerHTML="X"

	}

function startPlayAgain() {
	location.href="TicTacToe.html"
}

function navExit() {
	location.href="https://google.com"	
}


/*
var winners = ((sqr1==sqr2==sqr3) || (sqr4==sqr5==sqr6) || (sqr7==sqr8==sqr9) || (sqr1==sqr4==sqr7) || (sqr2==sqr5==sqr8)|| (sqr3==sqr6==sqr9) || (sqr1==sqr5==sqr9) || (sqr3==sqr5==sqr7));

winners = [[sqr1,sqr2,sqr3],[sqr4,sqr5,sqr6],[sqr7,sqr8,sqr9],[sqr1,sqr4,sqr7],[sqr2,sqr5,sqr8],[sqr3,sqr6,sqr9],[sqr1,sqr5,sqr9],[sqr3,sqr5,sqr7]];

function checkWin() {
	if winners(true) && sqr1.value=="X"
		"Go Bruins!!!"
	else if winners(true) && sqr1.value=="O"
		"\'SC Sucks"
	"It's a tie...Go Bruins!"
}

var turn
	turn=0;

turn++

if (turn%2==0) {

};
*/

/**/