// looping
// function showtheNumber(n) {
// 	for (var i = n; i => 1; i--) {
// 	}
// 	console.log(i);
// }

// rekursif
// function showtheNumber(n) {
// 	if (n === 0) return;
// 	console.log(n);
// 	return showtheNumber(n-1);
// }

// showtheNumber(10);

// looping
// function faktorial(n) {
// 	var result = 1;
// 	for (var i = n; i > 0; i--) {
// 		result *= i;
// 	}
// 	return result;
// }

// rekursif
// function faktorial(n) {
// 	if (n === 0) return 1;
// 	return n * faktorial(n-1);
// }

// faktorial(5);

// function cetakAngka(n) {
// 	if ( n === 0) {
// 		return;
// 	}
// 	console.log(n);
// 	cetakAngka(n-1);
// }

// cetakAngka(10);

function faktorial(n) {
	if ( n === 0) return 1;
	return n * faktorial(n-1);
}

faktorial(10);

