const p2 = document.querySelector('.p2')

function changeColor() {
	p2.style.backgroundColor = 'salmon'
}

const p3 = document.querySelector('.p3')

function changeColor3() {
	p3.style.backgroundColor = 'lightblue'
}

p3.onclick = changeColor3;

const p1 = document.querySelector('.p1')

function changeColor1() {
	p1.style.backgroundColor = 'lightgreen'
}
p1.onclick = changeColor1

const p4 = document.querySelector('section#b p')
p4.addEventListener('dblclick', function() {
	const ul = document.querySelector('section#b ul')
	const liNew = document.createElement('li')
	const textLiNew = document.createTextNode('New Item')

	liNew.appendChild(textLiNew)
	ul.appendChild(liNew)
})

const li1 = document.querySelector('section#b ul li:nth-child(1)')
// menimpa
// li1.onclick = function() {
// 	li1.style.backgroundColor = 'lightgreen'
// }
// li1.onclick = function() {
// 	li1.style.color = 'yellow'
// }

// tidak menimpa
li1.addEventListener('click', function() {
	li1.style.backgroundColor = 'lightblue'
})
li1.addEventListener('click', function() {
	li1.style.color = 'red'
})

const li2 = document.querySelector('section#b ul li:nth-child(2)')

li2.classList.add('two')

const two =document.querySelector('section#b ul .two')

two.addEventListener('mouseenter', function() {
	two.style.backgroundColor = 'yellow'
	two.style.color = 'green'
	two.style.fontSize = '30px'
	two.style.fontFamily = 'Arial, sans-serif'
})
two.addEventListener('mouseleave', function() {
	two.style.backgroundColor = 'lightgreen'
	two.style.color = 'yellow'
	two.style.fontSize = '24px'
	two.style.fontFamily = 'Segoe UI, sans-serif'
})






