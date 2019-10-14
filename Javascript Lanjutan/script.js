// Cara untuk membuat Object pada Javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Hanas',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration

// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }, 

//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// }
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let hanas = Mahasiswa('Hanas', 10);
// let farel = Mahasiswa('Farel', 30);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     }
// }

// let hanas = new Mahasiswa('Hanas', 10);


// 4. Object.create
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`);
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let hanas = Mahasiswa('Hanas', 10);
let farel = Mahasiswa('Farel', 30);