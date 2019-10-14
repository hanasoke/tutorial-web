// function plus(a, b) {
// 	return a + b;
// }

// var a = parseInt(prompt('input value 1 :'));
// var b = parseInt(prompt('input value 2 :'));
// var equal = plus(a*2, b*2);
// function multipliedby(a, b) {
// 	return a * b;
// }

// var result = multipliedby(plus(1,2), plus(3,4));

// var a = parseInt(prompt('input value 1 :'));
// var b = parseInt(prompt('input value 2 :'));
// var result = multipliedby(plus(a, b), plus(a, b));

// console.log(result);

// function add() {
// 	return arguments;
// }
// var coba = add(5,10,20,"hi",false);
// console.log(coba);

function add() {
	var equal = 0;
	for (var i = 0; i < arguments.length; i++) {
		equal += arguments[i];
	}
	return equal;
}

var doing = add(1,2,3,4,5,6,7,8,9,10);
console.log(doing);