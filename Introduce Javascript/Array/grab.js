var grab = [];
var tambahPenumpang = function(penumpang, grab){
	// jika angkot kosong
	if (grab.length == 0) {
		// tambah penumpang diawal array
		grab.push(penumpang);
		// kembalikan isi array & keluar dari function
		return grab;
	// else
	} else {
		// telusuri seluruh kursi dari awal 
		for (var i = 0; i < grab.length; i++) {
			// jika ada kursi kosong
			if (grab[i] == undefined) {
				// tambah penumpang dikursi tersebut 
				grab[i] = penumpang;
				// kembalikan isi array & keluar dari function
				return grab;
			}
			// jika sudah ada nama yang sama
			else if (grab[i] == penumpang) {
				// tampilkan pesan kesalahannya
				console.log(penumpang + ' sudah ada di dalam grab.');
			// kembalikan isi array & keluar dari function
			return grab;
			// jika seluruh kursi terisi
			} else if(i == grab.length - 1) {
				// tambah penumpang di akhir array
				grab.push(penumpang);
				// kembalikan isi array & keluar dari function
				return grab;
			}
		}
	}
}

var hapusPenumpang = function(penumpang, grab) {
	// jika angkot kosong 
	if (grab.length == 0) {
		// tampilkan pesan bahwa grab kosong dan tidak mungkin ada penumpang turun 
		console.log("Grab masih kosong");
		// kembalikan isi array & keluar dari function
		return grab;
	// else
	} else {
		// telusuri seluruh kursi dari awal 
		for (var i = 0; i < grab.length; i++) {
			// jika nama penumpang sesuai 
			if (grab[i] == penumpang) {
				// hapus penumpang dengan mengubah namanya, menjadi undefined
				grab[i] = undefined;
				// kembalikan isi array & keluar dari function
				return grab;
			// jika tidak ada nama yang sesuai
			}  else if ( i == grab.length - 1) {
				// tampilkan pesan kesalahannya
				console.log(penumpang + ' tidak ada di dalam grab');
				return grab;
			}
		}
	}
}