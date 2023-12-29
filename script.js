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
	string += "+";
	justOperated = false;
	operatorpressed = true;
	refresh();
}

function mul(){
	string += `*`;
	operatorpressed = true;
	justOperated = false;
	refresh();
}

function div(){
	string += `/`
	operatorpressed = true;
	justOperated = false;
	refresh();
}

function sub(){
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
}

refresh();
