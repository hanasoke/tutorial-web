// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = 'Hanas';
//   this.umur = '20';
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }
// }

// const hanas = new Mahasiswa();

// Array Function
// const Mahasiswa = function () {
//   this.nama = 'Hanas';
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }
// }

// const hanas = new Mahasiswa();

// const mhs1 = {
//   nama: 'Hanas',
//   umur: 20,
//   sayHello: () => {
//     // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     console.log(this);
//   }
// }



// const Mahasiswa = function () {
//   this.nama = 'Hanas';
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500)
// }

// const hanas = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {

  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle('size');
  setTimeout(() => {
    this.classList.toggle('caption');
    // console.log(this);
  })
})