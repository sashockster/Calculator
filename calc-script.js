var total=null;
var num=0;
var mainNum=0;
var string=0;
var displayNumber=0;
var firstNum=0;
var secNum=0;
var operand="";
//need to fix if a person inputs a number than clicks enter in a looop
//what if 
function clearAll(){
	mainNum=0;
	total=null;
	firstNum=0;
	secNum=0;
	operand="";
	display(0);
	/* Just need for debugging*/
	document.getElementById("secNumber").innerHTML=secNum;
	document.getElementById("firstNumber").innerHTML=Number(total);
	document.getElementById("operator").innerHTML=operand;
	document.getElementById("daTotal").innerHTML="Stored "+Number(total)+" as total";		
	
}

function addThis(num){
	document.getElementById("display").innerHTML = num;
	var temp=mainNum;
	mainNum+=""+num;
	document.getElementById("firstNumber").innerHTML=Number(temp);

		if(Number(temp)){
			//mainNum=temp;
			displayNumber=mainNum;
			display(displayNumber);	
		}
		display(mainNum);	
}
function display(num){
	//need to add a condtion where if a zero is inputted
	//and the display reads a zero, then zero will not be added.
	document.getElementById("display").innerHTML = Number(num);	
}
function calculate(symbol){

if(symbol!="="){
	operand=symbol;
}
	document.getElementById("operator").innerHTML=operand;

	//if this is the first number that is punched into calc
	// store it as firstNum

	//this is the second number punched in.
	//store it as second number and get total
	if(operand=="="||total!=null){
		//document.getElementById("display").innerHTML = displayNumber;	
		if(operand==""){
			getSum()
		}
		
		secNum=mainNum;
		mainNum=0;
		if(secNum!=0){
		getSum();
		}
		document.getElementById("secNumber").innerHTML=secNum;
		document.getElementById("firstNumber").innerHTML=Number(total);


	}
	//store the first number and make the next number entered store into secondNumber
	if(firstNum==0){
		firstNum=mainNum;
		document.getElementById("firstNumber").innerHTML=firstNum;
		total=firstNum;
		document.getElementById("daTotal").innerHTML="Stored "+Number(total)+" as total";		


			//make the mainumber into 0 so the next digits can be stored in as a second number
		mainNum=0;
	}
}
function getSum(){
	switch(operand){
		case "/" :	total=Number(total)/Number(secNum);
					break;
		case "X" :	total=Number(total)*Number(secNum);
					break;
		case "+" :	total=Number(total)+Number(secNum);
					break;
		case "-" :	total=Number(total)-Number(secNum);
					break;
		default: 	total=Number(secNum);
					break;

		
}
	document.getElementById("daTotal").innerHTML=Number(total);

	operand="";
	display(total);

}
console.log(num);