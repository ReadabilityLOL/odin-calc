let string = '0';
let displaystring = '0';

let output = document.querySelector('.output');

let decimalenable = true;
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
	decimalenable = true;
	refresh();
}

function mul(){
	if(operatorpressed){
		operate(string);
	}
	string += `*`;
	operatorpressed = true;
	justOperated = false;
	decimalenable = true;
	refresh();
}

function div(){
	if(operatorpressed){
		operate(string);
	}
	string += `/`
	operatorpressed = true;
	justOperated = false;
	decimalenable = true;
	refresh();
}

function sub(){
	if(operatorpressed){
		operate(string);
	}
	string += `-`
	justOperated = false;
	operatorpressed = true;
	decimalenable = true;
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

function decimal(){
	if(decimalenable){
		string += ".";
		displaystring += ".";
		decimalenable = false;
		refresh();
	}
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

	//do clean up after operating
	operatorpressed = false;
	decimalenable = true;

}

refresh();
