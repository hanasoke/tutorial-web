// // global scope / window scope
// var a = 1;
// var c = 3;

// function tes() {
// 	// name conflict
// 	var a = 2

// 	console.log(window.a);
// 	var b = 3;
// 	console.log(b);
// }

// tes();
// console.log(a);
// console.log(c);

// var d = 7;
// function tes(d) {
// 	console.log(d);
// }

// tes(d);
// tes(3.5);
// console.log(d);

// "use stritch" agar tidak dibuatkan variabel global

var a = 1;
function tes(a) {
	var a = 6;
	console.log(window.a);
}

tes(a);
console.log(a);

