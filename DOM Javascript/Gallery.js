const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {

	// cek apakah yang di-klik adalah thumb
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src;
		jumbo.classList.add('animasi');
		setTimeout(function() {
			jumbo.classList.remove('animasi')
		}, 500);

		thumbs.forEach(function(thumb) {
			// kalau dicheck
			// if (thumb.classList.contains('active')) {
			// 	thumb.classList.remove('active');
			// }
			// cara cepat
			thumb.className = 'thumb';
		});

		e.target.classList.add('active');
	}
});