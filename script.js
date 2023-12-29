let string = '0';
let displaystring = '0';

let output = document.querySelector('.output');

let justOperated = true;

function number(x){
	if(justOperated){
		string = `${x}`;
		justOperated = false;
		displaystring = `${x}`;
	} else {
		string += `${x}`;
		displaystring += `${x}`;
	}
	refresh();
}

function refresh(){
	output.textContent = string;
}

function add(){
	string += "+";
	displaystring += "+";
	justOperated = false;
	refresh();
}

function mul(){
	string += `*`;
	displaystring += "*";
	justOperated = false;
	refresh();
}

function div(){
	string += `/`
	displaystring += "/";
	justOperated = false;
	refresh();
}

function sub(){
	string += `-`
	displaystring += "-";
	justOperated = false;
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

	}else if(operation.indexOf("*") != -1){
		let result = operation.split("*");
		string =  result[0]/1*result[1]/1;

	}else if(operation.indexOf("/") != -1){
		let result = operation.split("/");
		string = result[0]/result[1];

	}else if(operation.indexOf("-") != -1){
		let result = operation.split("-");
		string = result[0]/1-result[1]/1;
	}
	justOperated = true;
}

refresh();
