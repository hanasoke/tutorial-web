var tanya = true;

while(tanya) {
	// menangkap pilihan player
	var p = prompt('pilih : batu, kertas, gunting');

	// menangkap pilihan computer 
	// membangkitkan pilihan random
	var comp = Math.random();

	if (comp <= 0.25) {
		comp = 'batu';
	} else if (comp > 0.25 && comp <= 0.50) {
		comp = 'kertas';
	} else {
		comp = 'gunting';
	}

	var result = '';
	// menentukan rules
	if (p == comp) {
		result = 'SERI!';
	} else if (p == 'batu') {
		// if (comp == 'kertas') {
		// 	result = 'LOST!';
		// } else {
		// 	result = 'WIN!';
		// }
		result = (comp == 'kertas') ? "WIN!" : "LOSE";
	} else if (p == 'kertas') {
		// if (comp == 'batu') {
		// 	result = 'WIN!';
		// } else {
		// 	result = 'LOSE!';
		// }
		result = (comp == 'batu') ? "WIN!" : "LOSE!";
	} else if (p == 'gunting') {
		// if (comp == 'batu') {
		// 	result = 'LOSE!';
		// } else {
		// 	result = 'WIN!';
		// }
		result = (comp == 'batu') ? "WIN!" : "LOSE!";
	} else {
		result = 'Salah memasukkan huruf';
	}

	// tampilkan hasilnya 
	alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu '+ result);

	tanya = confirm('again');
}

alert('terima kasih sudah bermain');