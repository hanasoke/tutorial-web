// setTimeout() -----------------------------------
// function1 
// setTimeout(showingthemessage, 3000);
// function showingthemessage() {
// 	console.log('Hello World!');
// }

// anmymous function
/* const tes = setTimeout(function(){
	console.log('ok');
}, 5000);

const button = document.querySelector('button');
button.addEventListener('click', function(){
	clearTimeout(tes);
	console.log('finish');
}); */

// setInterval()-----------------------------------
// const tes = setInterval(function(){
// 	console.log('ok');
// }, 2000);

// const button = document.querySelector('button');
// button.addEventListener('click', function(){
// 	clearInterval(tes);
// 	console.log('finish');
// });
















// Program hitung mundur
const destinationDate = new Date('Mar 8,2019 01:19:00').getTime();

const hitungMundur = setInterval(function() {

	const now = new Date().getTime();
	const selisih = destinationDate - now;

	// math floor pembulatan kebawah
	// (detik(ms) * jml detik dalam menit * jml menit dalam jam * jml jam dalam sehari)
	const day = Math.floor(selisih / (1000 * 60 *60 * 24));
	const hour = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); 
	const minute = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
	const second = Math.floor(selisih % (1000 * 60) / 1000);

	const teks = document.getElementById('teks');
	teks.innerHTML = 'Your time still : ' + day + ' day ' + hour + ' hour ' + minute + ' minute ' + second + ' second again!';

	if(selisih < 0) {
		clearInterval(hitungMundur);
		teks.innerHTML = "Your time run out!";
	}

}, 1000);
























