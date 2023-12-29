let string = '0';
let tempstring = '';

let output = document.querySelector('.output');

let justOperated = true;

function number(x){
	if(justOperated){
		string = `${x}`;
		justOperated = false;
	} else {
		string += `${x}`;
	}
	refresh();
}

function refresh(){
	output.textContent = string;
}

function add(){
	string += "+";
	justOperated = false;
	refresh();
}

function mul(){
	string += `*`;
	justOperated = false;
	refresh();
}

function div(){
	string += `/`
	justOperated = false;
	refresh();
}

function sub(){
	string += `-`
	justOperated = false;
	refresh();
}

function equals(){
	operate(string);
	justOperated = false;
	refresh();
}


function operate(operation){
	if(operation == ''){
		;
	}else if(operation.indexOf("+") != -1){
		let result = operation.split("+");
		string = result[0]/1+result[1]/1;
		return string;

	}else if(operation.indexOf("*") != -1){
		let result = operation.split("*");
		string =  result[0]/1*result[1]/1;
		return string;

	}else if(operation.indexOf("/") != -1){
		let result = operation.split("/");
		string = result[0]/result[1];
		return string;

	}else if(operation.indexOf("-") != -1){
		let result = operation.split("-");
		string = result[0]/1-result[1]/1;
		return string;	
	}
	justOperated = true;
}

refresh();
