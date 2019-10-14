// Event Handling
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// close.addEventListener('click', function() {
// 	card.style.display = 'none';
// });

// DOM Transversal 
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e) {
		// close[i].parentElement.style.display = 'none';
		// or
// 		e.target.parentElement.style.display = 'none';
// 	});
// }

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
	});
});