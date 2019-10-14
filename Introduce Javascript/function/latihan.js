// function matematika(a,b) {
// 	var kurang = a - b;
// 	var tambah = a + b;
// 	var kali = a * b;
// 	var bagi = a / b;

// 	total = kurang + kali + tambah + bagi;

// 	return(total);


//  total = (a-b) + (a*b) + (a+b) + (a/b);
// return(total);
// }

// var a = parseInt(prompt('nomor 1 : '));
// var b = parseInt(prompt('nomor 2 : '));

// var result = matematika(a,b);

// alert("Hasilnya adalah " + result);

// function sort() {
// 	var equal = 0;
// 	for (var i = 0; i < arguments.length; i++) {
// 		equal += arguments[i];
// 	}
// 	return equal;
// }

// var a = parseInt(prompt("masukkan nomor 1 : "));
// var b = parseInt(prompt("masukkan nomor 2 : "));
// var c = parseInt(prompt("masukkan nomor 3 : "));
// var d = parseInt(prompt("masukkan nomor 4 : "));

// var action = sort(a, b, c, d);

// alert("hasilnya adalah " + action);

var i =parseInt(prompt('input number'));

if (i % 2 == 0) {
	var even = true;
} 

if (even) {
	alert('even');
} else {
	alert('odd');
}