let string = '0';
let displaystring = '0';

let output = document.querySelector('.output');

let operatorpressed = false;
let justOperated = true;

function number(x){
	if(justOperated){
		string = `${x}`;
		justOperated = false;
		displaystring = `${x}`;
	} else {
		if(operatorpressed){
			displaystring = `${x}`;	
			string += `${x}`;
			operatorpressed = false;
		} else {
			string += `${x}`;
			displaystring += `${x}`;
		}
	}
	refresh();
}

function refresh(){
	output.textContent = displaystring;
}

function add(){
	if(operatorpressed){
		operate(string);
	}
	string += "+";
	justOperated = false;
	operatorpressed = true;
	refresh();
}

function mul(){
	if(operatorpressed){
		operate(string);
	}
	string += `*`;
	operatorpressed = true;
	justOperated = false;
	refresh();
}

function div(){
	if(operatorpressed){
		operate(string);
	}
	string += `/`
	operatorpressed = true;
	justOperated = false;
	refresh();
}

function sub(){
	if(operatorpressed){
		operate(string);
	}
	string += `-`
	justOperated = false;
	operatorpressed = true;
	refresh();
}

function equals(){
	operate(string);
	refresh();
}

function negate(){
	string = '-'+string;
	displaystring *= -1;
	refresh();
}

function operate(operation){
	if(operation == ''){
		;
	}else if(operation.indexOf("+") != -1){
		let result = operation.split("+");
		string = result[0]/1+result[1]/1;
		displaystring = string;

	}else if(operation.indexOf("*") != -1){
		let result = operation.split("*");
		string =  result[0]/1*result[1]/1;
		displaystring = string;

	}else if(operation.indexOf("/") != -1){
		let result = operation.split("/");
		string = result[0]/result[1];
		displaystring = string;

	}else if(operation.indexOf("-") != -1){
		let result = operation.split("-");
		string = result[0]/1-result[1]/1;
		displaystring = string;
	}
	justOperated = true;
	if(`${displaystring}`.length >= 7){
		displaystring = Number(displaystring).toExponential();
	}
	
	if(string == Infinity || string == NaN){
		displaystring = "Error";
	}
	operatorpressed = false;
}

refresh();
