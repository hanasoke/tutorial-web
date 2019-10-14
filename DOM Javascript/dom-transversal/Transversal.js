// Event Handling
// const tutup = document.querySelector('.close');
// const kartu = document.querySelector('.card');

// tutup.addEventListener('click', function() {
// 	kartu.style.display = 'none';
// });

// DOM Transversal
const tutup = document.querySelectorAll('.close');

// for (let i = 0; i < tutup.length; i++) {
// 	tutup[i].addEventListener('click', function(e) {
// 		// tutup[i].parentElement.style.display = 'none';
// or
// 		e.target.parentElement.style.display = 'none';
// 	});
// }

tutup.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
	});
});

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);
// console.log(nama.parentNode);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling);
// console.log(nama.nextElementSibling.nextElementSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousElementSibling);

