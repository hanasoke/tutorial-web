// DOM Selection
// document.getElementById() -> return  element

const judul = document.getElementById('judul');

judul.style.color = 'green';

judul.style.backgroundColor = 'lightblue';

judul.innerHTML = 'Hanas Bayu Pratama';

// document.getElementsByTagName() 
// -> return HTMLCollection

const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
	p[2].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// document.getElementsByClassName()
// -> return HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah oleh javascript';




