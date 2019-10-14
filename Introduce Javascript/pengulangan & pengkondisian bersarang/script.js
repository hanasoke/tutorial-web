// var s = '';
// for (var i = 0; i < 10; i++) {
// 	for (var j = 0; j < 5; j++ ) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

var s = '';
for (var i = 0; i < 5; i++) {
	for (var j = 0; j <= i ; j++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);

var a = '';
for (var x = 10; x > 0; x--) {
	for (var y = 0; y < x; y++) {
		a += '*';
	}
	a += '\n';
}
console.log(a);

var b = '';
for (var i = 1; i<=6; i++) {
	for (var j = i; j <= 6; j++) {
		b += ' ';
	}
	for (var k = 1; k<=i; k++) {
		b += '*';
	}
	b += '\n';
}
console.log(b);

// var c ='';
// for (var i = 5; i > 1; i--s) {
// 	for (var j = 1; j == i; j--) {
// 		c +=' ';
// 	}
// 	for (var k = 5; k > i; k++) {
// 		c += '*';
// 	}
// 	c += '\n';
// }
// console.log(c); cannot function

// document.write("- Segitiga 4<br>");
//     for (var i=1;i<=5;i++){
//         for (var j=1;j<=i;j++){
//             document.write("_");
//         }
//         for (var k=i;k<=5;k++){
//             document.write("*");
//         }
//         document.write("<br>");
//     }

var d = 0;
var e = 0;
var end = 18;
var stop = end/2;

for(e = 1;e<=end;e++) {
	if (stop>=e) {
		for (d = 1; d <= e; d++) {
			document.write('*');
		}
		document.write('<br>');
	}
}
for (e = stop; e > 1; e--) {
	if (stop >= e) {
		for (d = 0; d <= e-1; d++) {
			document.write('*');
		}
		document.write('<br>');
	}
}
document.write('<br>');

document.write('Piramida 1 <br>');
for (var i = 1; i <= 5; i++) {
	for (var j = i; j <= 5 ; j++) {
		document.write('_');
	}
	for (var k = 1; k <= i; k++) {
		document.write('*');
	}
	for (var l = 1; l <= i-1; l++) {
		document.write('*')
	}
	document.write('<br>');
}
document.write('Piramida 2 <br>');
for (var i = 1; i <= 5; i++) {
	for (var j = 1; j <= i; j++) {
		document.write('_');
	}
	for (var k = i; k <= 5; k++) {
		document.write('*');
	}
	for (var l = i+1; l <= 5; l++) {
		document.write('*');
	}
	document.write('<br>');
}
