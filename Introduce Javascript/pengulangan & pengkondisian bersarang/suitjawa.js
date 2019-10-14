var ask = true;
while( ask ) {
	// catch player choice
	var p = prompt('choice : elephant, ant, human');
	// catch computer choice
	// raise random numeral
	var comp = Math.random();

	if ( comp < 0.34 ) {
		comp = 'elephant';
	} else if (comp >= 0.34 && comp < 0.67) {
		comp = 'human';
	} else {
		comp = 'ant';
	}

	var result = '';
	// decisive rules
	if(p == comp) {
		result= 'DRAW!';
	}else if (p == 'elephant') {
		// if (comp == 'human') {
		// 	result = 'WIN!';
		// } else {
		// 	result = 'LOST';
		// }
		result = (comp == 'human') ? 'WIN!' : 'LOSE';
	}else if(p == 'human') {
		// if (comp == 'elephant') {
		// 	result = 'LOSE!';
		// } else {
		// 	result = 'WIN!';
		// }
		result = (comp == 'elephant') ? 'LOSE!' : 'WIN!';
	}else if (p == 'ant') {
		result = (comp == 'human') ? 'LOSE!' : 'WIN!';
	}else {
		result = 'inputting wrong choice!!';
	} 

	// show the result
	alert('you choice : ' + p + ' and Computer choice : ' + comp + '\nThen the Result : You ' + result);

	ask = confirm ('again?');
}
alert('thank you already play.');