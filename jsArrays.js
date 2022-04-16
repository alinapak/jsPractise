//nepatikrinti
//1. sukurti masyvą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.
// let arr =  [];
// let i=1;
// do {arr.push(i);
//    i++;}
//    while (i<=20)
// console.log(arr);
// console.log(arr.length);

//2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
function rand(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let arr = [];

// for (let i = 1; i<=rand(40,60); i++){
//    arr.push(i);
// }
// console.log(arr);

//3.Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
// let arr =  [];
// for (let n = 0; n<=rand(10,15);n++) {
//    let i = rand(5,47);
//    arr.push(i);
// }
// let max = arr[0];
// for (let a =0;a<arr.length;a++) {
//    if(arr[a]>max){
//       max =  arr[a]
//    }
// }
// console.log(arr);
// console.log(max);

//4. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20. 
// let arr = [];
// for (let i = 0; i < 100; i++) {
//    let ch = Math.floor(Math.random() * 5) + 1;
//    if (ch === 1) {
//       arr.push("D");
//    }
//    else if (ch===2) {
//       arr.push("E");
//    }
//    else if (ch===3){
//       arr.push("F");
//    }
//    else if (ch===4) {
//       arr.push("G")
//    }
//    else if (ch===5) {
//       arr.push("H")
//    }
// }
// console.log(arr);

//5. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
// let arr = [];
// for (let i = 0; i < 100; i++) {
//    let ch = Math.floor(Math.random() * 4) + 1;
//    if (ch === 1) {
//       arr.push("M")
//    }
//    else if (ch === 2) {
//       arr.push("N");
//    }
//    else if (ch === 3) {
//       arr.push("O");
//    }
//    else if (ch === 4) {
//       arr.push("P");
//    }
// }
// console.log(arr);
// let countM = 0;
// let countN = 0;
// let countO = 0;
// let countP = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === "M") {
//       countM++;
//    }
//    if (arr[i] === "N") {
//       countN++;
//    }
//    if (arr[i] === "O") {
//       countO++;
//    }
//    if (arr[i] === "P") {
//       countP++;
//    }
// }
// console.log(countM);
// console.log(countN);
// console.log(countO);
// console.log(countP);

//6. sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.
//kodel, jeigu nenurodai checko, ciklas tampa amzinu?
//mano variantas:

// let arr = [];
// for (let i = 0; i < 20; i++) {
//    let x = Math.floor(Math.random() * 41) + 10;
//    if (!arr.includes(x)) {
//       arr.push(x);
//    } else {
//       while (arr.includes(x)) {
//          x = Math.floor(Math.random() * 41) + 10;
//          if (!arr.includes(x)) {
//             arr.push(x);
//          }
//       }
//    }
// }
// console.log(arr);


// let arr = [];
// for (let i = 0; i < 20; i++) {
//    let x = Math.floor(Math.random() * 41) + 10;
//    let check = arr.includes(x);
//    if (check ===false) {
//       arr.push(x);
//    } else {
//       while (check === true) {
//          x = Math.floor(Math.random() * 41) + 10;
//          check = arr.includes(x);
//          if (check ===false) {
//             arr.push(x);
//          }
//       }
//    }
// }
// console.log(arr);
