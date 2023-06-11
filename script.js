// // kode JavaScript untuk melakukan loop sebanyak 10

// for (let i = 1; i <= 10; i++) {
//     document.write("<p>Congrats you win Rp. 1000.000.00</p>");
//   }

// //  Menentukan bilangan ganjil atau genap

// let number = 5;
// if (number % 2 === 0) {
//   console.log(number + " adalah bilangan genap");
// } else {
//   console.log(number + " adalah bilangan ganjil");
// }

// // Menentukan grade mahasiswa berdasarkan nilai yang diperoleh

// let score = 80;
// let grade;
// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else if (score >= 60) {
//   grade = "D";
// } else {
//   grade = "E";
// }
// console.log("Nilai Anda: " + score + ", Grade: " + grade);

// Menampilkan pesan berdasarkan waktu

// let hour = new Date().getHours();
// let greeting;
// if (hour < 12) {
//   greeting = "Selamat pagi!";
// } else if (hour < 18) {
//   greeting = "Selamat siang!";
// } else {
//   greeting = "Selamat malam!";
// }
// console.log(greeting);

// Menampilkan harga diskon

// let price = 100000;
// let discount = 0.2;
// let discountedPrice;
// if (price >= 100000) {
//   discountedPrice = price - (price * discount);
// } else {
//   discountedPrice = price;
// }
// console.log("Harga setelah diskon: " + discountedPrice);

// Menampilkan hasil kalkulasi berdasarkan operator matematika

// let num1 = 10;
// let num2 = 5;
// let operator = "+";
// let result;
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// } else {
//   console.log("Operator tidak valid");
// }
// console.log("Hasil kalkulasi: " + result);

// var number = 5;
// var hasil = document.getElementById("output");
// if (number % 2 === 0) {
//     hasil.innerHTML = number + " adalah bilangan genap";
// } else {
//     hasil.innerHTML = number + " adalah bilangan ganjil";
// }

// var num1 = 10;
// var num2 = 5;
// var operator = "+";
// var hasil = document.getElementById("output");
// var result;
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// } else {
//   hasil.innerHTML = "Operasi Tidak Valid";
// }
// hasil.innerHTML = "Hasil Kalkulasi : " + result;