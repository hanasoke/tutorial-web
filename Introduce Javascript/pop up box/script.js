// menampilkan popup
// alert("Hello World");
// alert("My name");
// alert("is");
// alert("Hanas Bayu Pratama");

// bisa menampilkan popup yang dapat diisi
// var name = prompt("Input your name:"); 
// if (name) {
// 	alert("your name is : " + name);
// } else {
// 	alert("tidak mengetikkan nama");
// } 

// menampilkan popup konfirmasi yang mengembalikan boolean
// var tes = confirm("kamu yakin ?");
// if (tes === true) {
// 	alert("user menekan tombol Ok!");
// } else {
// 	alert("user menekan tombol Cancel!");
// }

// contoh aplikasi sederhana
alert('selamat datang');
var again = true;

while(again === true) {
	var name = prompt('imput your name:');
	    alert('halo '+ name);

	again = confirm('try again?');
}

// alert('thank you...');
