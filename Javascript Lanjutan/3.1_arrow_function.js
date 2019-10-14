// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Hanas'));

// Arrow Function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Hanas'));

// biar lebih ringkas seperti dibawah

// implisit return ->return nya gak usah diketik
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Hanas Bayu Pratama'));

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());


// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Hanas', 'Siang'));





















let mahasiswa = ['Hanas Bayu Pratama', 'Iko Juniyus', 'Selgi Octavio'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({
    nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf);