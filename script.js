var singArray =["","","","","","","","",""]; //could be:0,0,0 or null, null, null
function navCells(){
/*alert("Go to navCells");*/

}
var turn = 0;
function playBox(){
	/*alert("Hello World")*/
	if (event.target.innerHTML !="")
		return;

	if ((turn%2==0) && (turn<9))
		event.target.innerHTML="X";
	else if (!(turn%2==0) && (turn<9))
		event.target.innerHTML="O";
	else 
		alert("Game over no more moves")
	turn++

	for(i=1; i<=9; ++i)
	{		
	singArray[i-1]= //or for sqr1_2 cellArray[r-1][c-1]
		document.getElementById("sqr"+i).innerHTML;

	}
	//tests to see who wins, if any

		if(singArray[0] == singArray[1] && singArray[1] == singArray[2] && singArray[0] != "")
			alert(singArray[0] + " is the champion!");

		if(singArray[3] == singArray[4] && singArray[4] == singArray[5] && singArray[3] != "")
			alert(singArray[3] + " is the champion!");
		
		if(singArray[6] == singArray[7] && singArray[7] == singArray[8] && singArray[6] != "")
			alert(singArray[6] + " is the champion!");
		if(singArray[0] == singArray[3] && singArray[3] == singArray[6] && singArray[0] != "")
			alert(singArray[0] + " is the champion!");
		if(singArray[1] == singArray[4] && singArray[4] == singArray[7] && singArray[1] != "")
			alert(singArray[1] + " is the champion!");
		if(singArray[2] == singArray[5] && singArray[5] == singArray[8] && singArray[2] != "")
			alert(singArray[2] + " is the champion!");
		if(singArray[0] == singArray[4] && singArray[4] == singArray[8] && singArray[0] != "")
			alert(singArray[0] + " is the champion!");
		
		if(singArray[2] == singArray[4] && singArray[4] == singArray[6] && singArray[2] != "")
			alert(singArray[6] + " is the champion!");

	}

function startPlayAgain() {
	location.href="TicTacToe.html"
}

function navExit() {
	location.href="https://google.com"	
}

//var r1 = [sqr1,sqr2,sqr3];

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