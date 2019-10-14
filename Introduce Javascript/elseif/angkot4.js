// sedang lembur

var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkotLembur = 8; 

for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
	if (noAngkot <= angkotBeroperasi) {
		console.log("Angkot No. " + noAngkot + " sedang beroperasi dengan baik");
	} else if(noAngkot === angkotLembur || noAngkot === 10) {
		console.log("Angkot No. " + noAngkot + " sedang lembur");
	} else {
		console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
	}
}