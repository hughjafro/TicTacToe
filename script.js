//could be:0,0,0 or null, null, null
var singArray =["","","","","","","","",""]; 

//declare a variable starting with 1
var popupOpacity = 1.0;


function pageLoaded(){
/*alert("Go to navCells");*/
//document.getElementById("win").style.opacity=0.2;

//setTimeout("alert('One secod has elapsed.');", 1000);

//This will set the timeout to 3secs while calling a function that we have to define later
setTimeout("timeout();", 1000);
}

//This function says that on timeout it will find all id's and the style of opacity will ==popupOpacity will decrement by .1 as long as the opacity is over -.1; couldnt get it to work with >= 0. Decrements every 100ms
function timeout() {
	document.getElementById("start").style.opacity = popupOpacity;
	popupOpacity -= .1;
	if(popupOpacity >= -0.1)
			setTimeout("timeout();", 100);

	if(popupOpacity <= 0);
 		document.getElementById("start").style.left="-50000px";
}

/*function hidePopup (){
	popup.style.display = "none";
}

function showPopup (){
	popup.style.display = "inline-block";
}
*/
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
	var champ;

		if(singArray[0] == singArray[1] && singArray[1] == singArray[2] && singArray[0] != "")
			document.getElementById("win").innerHTML=style.display = inline-block; // = (singArray[0] + " is the champion!");

		if(singArray[3] == singArray[4] && singArray[4] == singArray[5] && singArray[3] != "")
			{champ = singArray[3];
				document.getElementById("win").innerHTML=champ + " is the champion!";
				document.getElementById("win").style.display="inline-block";
			}
		
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


//document.getElementById("alert").innerHTML=
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