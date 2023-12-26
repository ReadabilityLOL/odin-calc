let string = '';

function add(x,y){
	string += `${x}+${y}`
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
		return "+";
	}else if(operation.indexOf("*") != -1){
		;
	}else if(operation.indexOf("/") != -1){
		;
	}else if(operation.indexOf("-") != -1){
		;
	}
}
