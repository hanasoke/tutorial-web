// this
var a = 10; 
console.log(window.a);

// cara 1 - function declaration
function apakabar() {
	console.log(this);
	console.log('apa kabar');
}
this.apakabar();
// this mengembalikan object Global

// cara 2 - object literal
var object = {a : 10, nama : 'Hanas'};
object.halo = function() {
	console.log(this);
	console.log('halo');
}
object.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor 
function masbro() {
	console.log(this);
	console.log('masbro');
} 
var obj1 = new masbro();
var obj2 = new masbro();