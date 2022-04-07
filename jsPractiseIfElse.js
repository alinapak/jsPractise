// first task
// let n
// function goodOrBad(n) {
// if (n<0) {
//    console.log("blogas");
// }
// else if (n>0) {
//    console.log("geras")
// }
// console.log("nei teigiamas, nei neigiamas");
// }
// goodOrBad(0);

// second task
// let n;
// function redGreenYellow(n) {
//    if(n===1) {
//       console.log("Eiti");
//    }
//    else if (n===2) {
//       console.log("Palaukti");
//    }
//    else if (n===3) {
//       console.log("Sustoti");
//    }
// }
// redGreenYellow(1);

//third task
// let k;
// let d;
// let n;
// function ifItFits(d,k,n) {
//    if ((k/d) > n) {
//       console.log("Knygos netelpa į dėžes");
//    }
//    else if ((k/d) <= n) {
//       console.log("Knygos telpa į dėžes");
//    }
// }
// ifItFits(2,8,5);
// ifItFits(3,18,5);

//forth task  //JavaScript doesn’t support functions that return multiple values. However, you can wrap multiple values into an array or an object and return the array or the object.??
let a;
let b;
function increaseDecrease(a, b) {
   let firstCondition = [(a += 1), (b -= 1)];
   let secondCondition = [(b += 1), (a -= 1)];
   if (a > b) {
      return secondCondition;
   } else if (b > a) {
      return firstCondition;
   }
}
console.log(increaseDecrease(1, 2));
console.log(increaseDecrease(1, 4));

//fifth task
function iceCream(c, p) {
   let k = c / p;
   let icePortion = Math.floor(k); //ice portions
   let m = c % p; //money left
   let result = [icePortion, m];
   if (c / p > 0) {
      console.log(result);
   }
}
iceCream(50, 20);

//sixth task
function triangle(n) {
   if (n % 3 === 0) {
      console.log("Galime sudėlioti trikampį");
   } else {
      console.log("Trikampio sudėlioti negalima");
   }
}
triangle(6);
triangle(4);

//seventh task
function months(n) {
   if (n === 1 || n === 3 || n === 5 || n === 7 || n === 8 || n === 10 || n === 12) {
      console.log(31);
   }
   else if (n === 4 || n === 6 || n === 9 || n === 11) {
      console.log(30)
   }
   else if (n === 2) {
      console.log(28);
   }
}
months(2);
months(5);

//eith task 
function olderYounger(k) {
   if ((k === 2) || (k === 4) || (k === 6)) {
      console.log("Kambarį tvarkys vyresnėlis");
   }
   else if ((k === 1) || (k === 3) || (k === 5)) {
      console.log("Kambarį tvarkys jaunėlis");
   }
}

olderYounger(4);
olderYounger(1);

//ninth task
function olympics(m) {
   let n = ((m - 1896) / 4) + 1
   if (m % 4 === 0) {
      console.log(n);
   }
   else if (m % 4 !== 0) {
      console.log("Metai neolimpiniai");
   }
}
olympics(1904);
olympics(2005);

//tenth task 
function onTime(v, m) {
   let v1 = 8; //tokia val isejo is namu
   let m1 = 29; //  tokia minute isejo is namu
   let m2 = 23; //keliones iki mokyklos trukme
   // let time = (v1 * 60) + m1;
   // let school = (v * 60) + m;
   if ((((v1 * 60) + m1) + m2) <= (v * 60) + m) {
      console.log("Petras į pamoką nepavėluos");
   }
   else if ((m2 + (v1 * 60) + m1) > (v * 60) + m) {
      console.log("Petras į pamoką pavėluos");
   }
}
console.log(onTime(9, 5));





