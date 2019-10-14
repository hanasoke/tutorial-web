// var number = parseInt(prompt('input number :'));
// if (number === 1) {
// 	alert('you input number 1');
// } else if(number === 2) {
// 	alert('you input number 2');
// } else if(number === 3) {
// 	alert('you input number 3');
// } else {
// 	alert('number than you input wrong!');
// }

// var number = prompt('input number :');
// switch(number) {
// 	case '1' :
// 		alert('you input number 1');
// 		break;
// 	case '2' :
// 		alert('you input number 2');
// 		break;
// 	case '3' :
// 		alert('you input number 3');
// 		break;
// 	default : 
// 		alert('number than you input wrong');
// 		break;
// }

var item = prompt('input name of food / drink : \n (cth: rice, meat, milk, hamburger, softdrink)');

switch(item) {
	case 'rice' :
	case 'meat' :
		alert('HEALTH food!');
		break;
	case 'milk' :
		alert('HEALTH drink!');
		break;
	case 'hamburger' :
		alert('UNHEALTH food!');
		break;
	case 'softdrink' :
		alert('UNHEALTH drink!');
		break;
	default : 
		alert('you input the name of food / drink that false!');
		break;
}