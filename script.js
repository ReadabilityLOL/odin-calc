let string = '0';

function add(x,y){
	string += `+${x}`
	operate(string);
}

function mul(x,y){
	return x*y;
}

function div(x,y){
	return x/y;
}

function sub(x,y){
	return x-y;
}

function operate(operation){
	if(operation == ''){
		;
	}else if(operation.indexOf("+") != -1){
		let result = operation.split("+");
		return result[0]/1+result[1]/1;

	}else if(operation.indexOf("*") != -1){
		let result = operation.split("*");
		return result[0]/1*result[1]/1;

	}else if(operation.indexOf("/") != -1){
		let result = operation.split("/");
		return result[0]/result[1];

	}else if(operation.indexOf("-") != -1){
		let result = operation.split("-");
		return result[0]/1-result[1]/1;
	}
}
