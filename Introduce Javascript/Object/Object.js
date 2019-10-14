// create object
var mhs = {
	nama : "Hanas Bayu Pratama",
	umur : 19,
	ips : [3.00, 3.16, 3.20],
	alamat : {
		jalan: "Jl.Primadana No.20",
		kota : "Bekasi",
		provinsi : "Jawa Barat"
	}
};

// Literal Object
var mhs1 = {
	nama : 'Sandhika Galih',
	nrp : '21379489093632',
	email : 'sandhikagalih@unpas.ac.id',
	jurusan : 'Teknik Informatika'
}
var mhs2 = {
	nama : 'Ajeng Vebriaty',
	nrp : '21379489093632',
	email : 'ajeng@gmail.com',
	jurusan : 'Kebidanan'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('Nurul','6467779012','nurul@yahoo.com','PGSD');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}

var mhs4 = new Mahasiswa('Rizal','029038912','rizal@icloud.com','Teknik Jaringan');