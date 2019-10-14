// Manipulasi Array

// 1. Menambah isi array
// var arr = ["hanas",1,true];
// console.log(arr[0]);

// var arr = [];
// arr[0] = "Hanas";
// arr[1] = "Bayu";
// arr[2] = "Pratama";
// arr[6] = "Driva";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Hanas","Driva","Revany"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan isi Array
// var arr = ["Hanas","Driva","Revany","Doddy"];

// for (var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
// var arr = ["Hanas","Driva","Revany"];
// 1.Join
// console.log(arr.join(' - '));

// 2.Push & Pop --the last element--
// arr.push('Wais','Alfian');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift --the first element--
// arr.unshift('Ferdiansyah');
// arr.shift();
// console.log(arr.join(' - '));

// var arr = ["Hanas","Driva","Revany"];
// 4. splice
// the formula of splice
// splice(indexAwal, mauDihapusberapa, elementBaru1, elementBaru2, ...);
// arr.splice(1, 2, 'Mulyani', 'Bagas');
// arr.splice(2, 0, 'Basalamah', 'Fitri');
// console.log(arr.join(' - '));

// 5. slice
// the formula of slice
// slice(awal,akhir)
// var arr = ["Hanas","Driva","Revany", 'Mulyani', 'Bagas'];
// var arr2 = arr.slice(1,4);
// console.log(arr2.join(' - '));
// console.log(arr.join(' - '));

// 6. foreach
// var number = [1,2,3,4,5,6,7,8,9];
// for (var i = 0; i < number.length; i++) {
// 	console.log(number[i]);
// }

// same like for
// number.forEach(function(e) {
// 	console.log(e);
// });
// -----same-------
// var print = function(e) {
// 	console.log(e);
// }
// number.forEach(print);

// var nama = ['Hanas', 'Bagas', 'Bintang'];

// nama.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-'+(i+1) +' adalah : '+e);
// })

// 7. Map
// var angka = [1,2,4,7,11,16];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. Sort
// var numeral = [1,7,8,6,4,9,2,3];
// console.log(numeral.join(' - '));
// numeral.sort();
// console.log(numeral.join(' - '));

// var type = [8,9,10,11,12,23,14,15];
// type.sort();
// console.log(type.join(' - '));

// type.sort(function(a,b) {
// 	return a-b;
// });
// console.log(type.join(' - '));

// 9. Filter & Find
// var digit = [1,2,10,5,20,3,6,8,9];
// filter
// var digit2 = digit.filter(function(x) {
// 	return x >= 8;
// });
// console.log(digit2.join(' - '));
// find
// var digit3 = digit.find(function(x) {
// 	return x > 8;
// });
// console.log(digit3)
