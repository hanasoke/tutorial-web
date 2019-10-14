// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur`;
// }

// let hanas = new Mahasiswa('Hanas', 17);

// versi Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }

  tidur = function (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
  }
}

let hanas = new Mahasiswa('Hanas', 17);
let faris = new Mahasiswa('Faris', 10);

let angka = [3, 1, 2];
console.log(angka.sort());