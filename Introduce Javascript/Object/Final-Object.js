// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang) {
		// jika angkot kosong
		if (this.penumpang.length == 0) {
		// tambah penumpang di awal array
		this.penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return this.penumpang;
		// else
		} else {
			// telusuri seluruh kursi dari awal
			for (var i = 0; i < this.penumpang.length; i++) {
				// jika ada kursi kosong
			 	if(this.penumpang[i] == undefined) {
					// tambah penumpang dikursi tersebut
					this.penumpang[i] = namaPenumpang;
					// kembalikan isi array
					return this.penumpang;

				// jika sudah ada nama yang sama 
				} else if(this.penumpang[i] == namaPenumpang) {
					// tampilkan pesan kesalahan
					console.log(namaPenumpang + ' sudah ada didalam angkot.' );
					return this.penumpang;

					// jika seluruh kursi terisi
				} else if (i == this.penumpang.length - 1) {
					// tambah penumpang diakhir array
					this.penumpang.push(namaPenumpang);
					return this.penumpang;
				}
			}
		}
		
	}
	

	this.penumpangTurun = function(namaPenumpang,bayar) {
		if (this.penumpang.length === 0) {
			alert('angkot masih kosong!');
			return false;
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
				// jika ada nama penumpang yang sesuai
			} else if( i == this.penumpang.length - 1) {
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' tidak ada di dalam angkot.');

				return this.penumpang;
			}
		}
	}
}

var angkot1 = new Angkot('Hanas Bayu Pratama',['Komsen','Kranggan'],[], 0);

var angkot2 = new Angkot('Sandhika Galih',['Cicaheum','Cibiru'],[],0);

var angkot3 = new Angkot('Tom Cruise',['Antapani','Ciroyom'],[],0);