// script.js
//
var currentExpression = "";
var lastExpression = "";
const operators = new Set(["/", "*", "+", "-", ","]);
const display = document.querySelector(".display");
const upperDisplay = document.querySelector(".upperDisplay");
display.innerText = "0";
upperDisplay.innerText = "";
function displayResult(result){
	// mudar o texto do display para result
	display.innerText = result;
}
function calculateResult(){

	var result;
	result = eval(currentExpression);
	displayResult(result);
	lastExpression = currentExpression;
	console.log(result);
	currentExpression = result;
	upperDisplay.innerText = lastExpression;
		

}
function division(){
	operator("/");


}
function multiplication(){
	operator("*");
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function changeSignal(){
	if(currentExpression != ""){
		var n = currentExpression.length-1;
		while(n > 0){

			if(!(isNumeric(currentExpression.charAt(n)))){
				break;}
			n--;
			if(n == 0){
				currentExpression = "(-" + currentExpression + ")";
				display.innerText = currentExpression

				return;
			}
			// achamos o primeiro indice nao numerico..
		}
		currentExpression = currentExpression.slice(0,n+1) + "(-" + currentExpression.slice(n+1, currentExpression.length) + ")";
		// fazer slice e dps adicionar parenteses
		display.innerText = currentExpression;
	}
}

function addNumber(number){
	if(currentExpression.length > 16){
		return;
	}
    if (display) {
	currentExpression += number;	
       	display.innerText = currentExpression;
    }


}
function porcentagem(){
	lastExpression = currentExpression + "%";
	currentExpression = eval(currentExpression/100);
	console.log(currentExpression);
	display.innerText = currentExpression;
	upperDisplay.innerText = lastExpression;
	currentExpression = String(currentExpression || "");
}
function reset(){
	currentExpression = "";
	display.innerText = "0";
	upperDisplay.innerText = "";
}
function quaseReset(){
	currentExpression = "";
	display.innerText = "0";
} // vou me matar
function decimal(){
	if(!(operators.has(currentExpression.charAt(currentExpression.length-1))) && (currentExpression.charAt(currentExpression.length-1) != ".")){
		currentExpression += ".";
		display.innerText = currentExpression;
	}
	return;
}
function operator(op){
	if(currentExpression.length > 16){
		return;}
	if(currentExpression == ""){
		return;}
	if(operators.has(currentExpression.charAt(currentExpression.length - 1)))
	{
		currentExpression = currentExpression.slice(0, -1);
		currentExpression += op;
		display.innerText = currentExpression;
		return; // tem que substituiro
	}
	currentExpression += op;
	display.innerText = currentExpression;	

}
