// manipulasi element
// inner html
// const judul = document.getElementById('judul');
// judul.innerHTML = '<u>Hanas Bayu Pratama</u>';

// bisa menghilangkan beberapa element html
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!';

// style css
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// membuat Attribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Hanas');

// menghapus Attribute
// const a = document.querySelector('section#a a');
// a.removeAttribute('href'); 

// menimpa attribute
// const p2 = document.getElementsByClassName('p2')[0];
// p2.setAttribute('class','label');

// mendapatkan attribute
// const p3 = document.querySelector('section#a .p3')
//   console.log(p3.getAttribute('class'))

// manipulasi node
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// section b
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// remove child 
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);


// replace node
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
pBaru.style.color = 'white';

liBaru.style.backgroundColor = 'blue';
liBaru.style.color = 'white';

h2Baru.style.backgroundColor = 'yellow';
h2Baru.style.color = 'lightblue';




















