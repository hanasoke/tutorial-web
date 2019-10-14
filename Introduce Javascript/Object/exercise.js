// sebelum ada object

// var mahasiswa = ['Hanas', true, [3.00,3.10,3.05,3.23,3.40,3.50,3.45,3.25]];

// function IPKumulatif(IPSemester) {
// 	var total = 0;
// 	for (var i = 0; i < IPSemester.length; i++) {
// 		total += IPSemester[i];
// 	}
// 	return total / IPSemester.length;
// }

// console.log(IPKumulatif(mahasiswa[2]));

// sesudah ada object
// var mahasiswa = {
// 	nama : 'Hanas Bayu Pratama',
// 	lulus : true,
// 	IPSemester : [3.00, 3.10, 3.05, 3.23, 3.40, 3.50, 3.45, 3.25],
// 	IPKumulatif : function() {
// 		var total = 0;
// 		var ips = this.IPSemester;
// 		for (var i = 0; i < ips.length; i++) {
// 			total += ips[i];
// 		}
// 		return total / ips.length;
// 	}
// }
// console.log(mahasiswa.IPKumulatif());

// var people = {
// 	nama : "Hanas Bayu Pratama",
// 	umur : 20,
// 	pekerjaan : "Mahasiswa",
// 	sapa : function() {
// 		return 'Hi, nama saya ' + this.nama + ' ,usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
// 	}
// }
// alert(people.sapa());
// alert(people.umur);
// alert(people.nama);

// var student = {
// 	nama : "Hanas Bayu Pratama",
// 	umur : 20,
// 	ips : [3.00, 3.15, 3.20],
// 	alamat : {
// 		jalan : "Jl. Primadana No.14 Bekasi",
// 		kota : "Bekasi",
// 		provinsi : "Jawa Barat"
// 	}
// }

// var kampus = {
// 	nama : "CCIT",
// 	jurusan : {
// 		TI : {
// 			coding : "Software Engenering",
// 			Architecture : "IOT"
// 		},
// 		NAP : {
// 			Architecture : "Networking",
// 			Handware : "Oprek Komputer"
// 		}
// 	}
// }


// Function Declaration
// function Lecture(nama, nid, email, jurusan) {
// 	var prof = {};
// 	prof.nama = nama;
// 	prof.nid = nid;
// 	prof.email = email;
// 	prof.jurusan = jurusan;
// 	return prof;
// }

// var profesor = Lecture('Sandhika Galih','123412233','sandhikagalih@gmail.com','Teknik Informatika');

// Constructor
// function Asdos(nama, nim, email, jurusan) {
// 	this.nama = nama;
// 	this.nim = nim;
// 	this.email = email;
// 	this.jurusan = jurusan;
// }

// var asdos1 = new Asdos('Hanas','98238912','hanasoke@gmail.com','Teknik Informatika');

// var asdos2 = new Asdos('Natasha','9812637','natasha@yahoo.com')

// var a = 12;
// console.log(this == window);
// console.log(this.a);

// if (this == window) {
// 	alert("This is same like Window");
// } else {
// 	alert("I'm Happy");
// }

// function declaration
// function hello() {
// 	console.log(this);
// 	console.log('apa kabar');
// }

// this.hello();

// object literal
// var obj = {
// 	Name : 'Hanas',
// 	Class : '2SC8',
// 	Major : 'Informatic Engenering'
// };
// obj.halo = function() {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();

// constructor
// function oy() {
// 	console.log(this);
// 	console.log('hanas');
// }

// var uy1 = new oy();
// var uy2 = new oy();