// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const h1 = document.querySelector('section#b ul li:nth-child(2)');
h1.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';

// document.querySelectorAll()
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}
