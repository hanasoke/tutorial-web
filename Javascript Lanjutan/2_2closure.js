// function init() {
//   let nama = 'Hanas';
//   let umur = 33;

//   function tampilNama() {
//     console.log(nama);
//     console.log(umur);
//   }
//   console.dir(tampilNama);
// }
// init();

// function init() {

//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Bayu');

// function init() {

//   return function (nama) {
//     console.log(nama);
//   }

// }
// let panggilNama = init();
// panggilNama('Bayu');
// panggilNama('Andika');

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Hanas');
// selamatSiang('Hanas');
// selamatMalam('Hanas');

// console.dir(selamatMalam('Hanas'));


// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
})();

counter = 100; //tidak dapat mengganggu closure 

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());