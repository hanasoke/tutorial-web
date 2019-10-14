// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Hanas';

// creation phase pada Global Context
// nama var = undefined;
// nama function = fn();
// hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello);

// console.log(sayHello());

// var nama = 'Hanas';
// var umur = 33;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya berusia ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


// var nama = 'Hanas Bayu Pratama';
// var username = '@hanasbp';

// function cetakURL() {
//   console.log(arguments);
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL('@hantech', '@nuruutami'));

// function a() {
//   console.log('ini a');

//   function b() {
//     console.log('ini b');

//     function c() {
//       console.log('ini c');
//     }

//     c();
//   }

//   b();
// }

// a();

// javascript visualizer

// function satu() {
//   var nama = 'Hanas';
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doddy');
// console.log(nama);