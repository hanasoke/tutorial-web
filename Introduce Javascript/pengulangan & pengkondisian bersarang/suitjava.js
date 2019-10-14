var tanya = true;

while( tanya ) {
	// menangkap pilihan player
	var p = prompt('pilih : gunting, batu, kertas');

	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();

	if ( comp < 0.34 ) {
		comp = 'gunting';
	} else if ( comp >= 0.34 && comp < 0.67) {
		comp = 'batu';
	} else {
		comp = 'kertas';
	}

	var hasil = '';
	// menentukan rules
	if ( p == comp) {
		hasil = 'SERI!';
	} else if (p == 'gunting') {
		hasil = (comp == 'batu') ? 'KALAH!' : 'MENANG!';
	} else if (p == 'batu') {
		hasil = (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
	} else if (p == 'kertas') {
		hasil = (comp == 'batu') ? 'MENANG!' : 'KALAH!';
	} else {
		hasil = 'memasukkan pilihan yang salah!!';
	}

	// tampilkan hasilnya
	alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

	tanya = confirm('again ?');
}

alert('terima kasih sudah bermain');






