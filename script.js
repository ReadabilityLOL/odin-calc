let string = '0';


function number(x){
	if(string == "0"){
		string = `${x}`;
	} else {
		string += `${x}`;
	}
}

function add(){
	string += "+";
}

function mul(){
	string += `*`;
}

function div(){
	string += `/`
}

function sub(){
	string += `-`
}

function equals(){
	operate(string);
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
}
