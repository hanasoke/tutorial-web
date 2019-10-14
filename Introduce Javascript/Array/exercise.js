
// var myArr = ['teks',2,false,'myFunc',[4,5,6]];

// console.log(myArr[4][2]);

// console.log(myArr);

// var nama = ["Hanas","Nurul","Jokowi"];
// Join
// alert(nama.join(' - '));

// push = menambah element terkhir
// nama.push("Natasha");

// pop = menghilangkan element terakhir
// nama.pop();
// nama.pop();
// alert(nama.join(' - '));

// unshift = menambah element awal 
// nama.unshift('Ferdinan');

// shift = menghilangkan element awal 
// nama.shift();
// nama.shift();
// alert(nama.join(' - '));

// var student = ["Hanas","Natasha","Bagas","Suryanegara"];
// splice
// student.splice(2, 2, "Surya", "Kencana","dwi");

// slice
// var student1 = student.slice(1,3);
// console.log(student1.join(' - '));
// console.log(student.join(' - '));

// foreach

// var number = [1,3,4,2,8,5,9,6];
// for (var i = 0; i < number.length; i++) {
// 	console.log(number[i]);
// }

var angka = [1,3,4,2,8,5,9,6];

angka.forEach(function(e,i) {
	console.log(e + (i+1) );
})

// var mhs = ['Hanas','Aqso','Risiasi'];

// mhs.unshift("Ferdiansyah");

// mhs.push("Dani");

// mhs.splice(4,0,"Euklides");

// mhs.forEach(function(e,i) {
// 	document.write('\nMahasiswa CCIT ke-'+(i+1) + ' adalah : ' + e + '<br>');
// })

// Map
// var angka = [1,2,3,4,5,6,7,8,9,10];
// var angka2 = angka.map(function(e) {
// 	return e + 2;
// })
// console.log(angka2.join(' - '))

// var student = ["Hanas", "Ari", "Nurul"]
// var students = student.map(function(e) {
// 	return e;
// })

// console.log(students.join(' - '))

// Sort
// var number = [1,2,9,3,4,5,7,8,6]
// console.log(number.join(' '))
// number.sort()
// console.log(number.join(' '))

// var number = [100,90,80,70,60,50,40,30,20,10,9,8]

// number.sort()

// number.sort(function(a,b) {
// 	return a-b;
// })

// console.log(number.join(' '))

// Filter
// var angka = [2,3,40,4,10,6,1,8,12,14,16];

// angka.sort()

// angka.sort(function(a,b) {
// 	return a-b;
// })

// var angka2 = angka.filter(function(x) {
// 	return x >= 12;
// })
// console.log(angka2.join(' - '))

// find
// var angka3 = angka2.find(function(y) {
// 	return y > 9;
// })
// console.log(angka3);












