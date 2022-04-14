//1.Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
function sum(a, b) {
	let result = (a + b);
	console.log(result);
}
sum(5, 15)

//2.Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.
function biggerOrSmaller(a, b) {
	if (a > b) {
		console.log(a + " is bigger than " + b);
	}
	else if (b > a) {
		console.log(b + " is bigger than " + a);
	}
	else
		console.log(b + "" + "=" + "" + a);
}
biggerOrSmaller(5, 5);

//3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
function years(n) {
	if (typeof n === "number" && ((n % 4 === 0 || n % 400 === 0) && n > 0)) {
		return "metai yra keliamieji";
	}
	else if (typeof n !== "number") {
		return "kintamasis nera skaicius";
	}
	else if (n === 0 || n < 0) {
		return "cia ne musu eros metai"
	}
	return "metai nera keliamieji"
}
console.log(years(0));

//4.Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
function square(n) {
	if (typeof n === "number" && n > 0) {
		return n * n;
	}
	return "not a number or number is negative"
}
console.log(square(8))

//5.Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.
function multiply(n) {
	if (n === 1) {
		return 1;
	}
	else if (n > 1) {
		return n * multiply(n-1) ;
	}
	return "skaicius mazesnis uz 1"
}
console.log(multiply(4));
//6.neiveiktas
//Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
// function division(n) {
//    if (n === 1) {
//       return 1;
//    }
//    else if (n < 1 || n === 0 && !Number.isInteger(n)) {
//       return "ieskome tik teigiamu sveikuju skaiciu ir ne nulio"
//    }
//    else if (Number.isInteger(n) && n > 1) {
//       let result = n/division(n-1);
//       if (result%2===1) {
//       return result;
//    }
//    else if (result%2===0) {
//       let result;
//       result = result+1;
//    }
// }
//    return result
// }
//kitas bandymas
// function division(n) {
//    if (n%2===1) {
//       return 0;
//    }
//    else if (n%2===0)
// {
//    return n/division(n-1);
// }
// }
// console.log(division(6));

//7.Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).
function forText(text) {
	if (typeof text === "string") {
		return "tekstas"+ " "+text +" "+"turi"+" "+ text.match(/\S/g).length +" "+ "simboliu"
	}
	return "ivestis nera tekstine"
}
let text1 = "mano vardas agne"
console.log(forText(text1));
console.log(forText(2));

//8.Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".
function phoneNumber(x) {
	if (!Array.isArray(x)) {
		return "kintmasis nera masyvas";
	}
	else if (x.length!==10) {
		return "masyvas nera tinkamo ilgio";
	}
	for (let i=0;i<x.length;i++) {
		if (typeof x[i] !== "number") {
			return "masyvo nariai nera skaiciai";
		}
	}
	return "("+x[0]+x[1]+x[2]+")"+" "+x[3]+x[4]+x[5]+"-"+x[6]+x[7]+x[8]+x[9];
}

let telNr = [1,2,2,2,2,3,3,4,4,5];
console.log(phoneNumber(telNr))

9. //Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra ilgesnis.
function checkLength(text1,text2) {
	if (typeof text1 !=="string" && typeof text2!=="string") {
		return "variable is not a string type"
	}
	if (text1.match(/[A-Za-z\d]/g).length>text2.match(/[A-Za-z\d]/g).length) {
		return "pirmas tekstas ilgesnis uz antra"
	}
	else if (text1.match(/[A-Za-z\d]/g).length<text2.match(/[A-Za-z\d]/g).length) {
		return "antras tekstas ilgesnis uz pirma"
	}
	return "tekstu ilgiai vienodi"
}
let txt = "Man yra 69 metai";
let txt2= "Alfredas gyvena kaime";
console.log(checkLength(txt,txt2));

//10.Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.
function countTextA(text) {
	if (typeof text !== "string") {
		return "variable should be a string type"
	}
	return text.match(/[{A}a]/g).length;
}
let txt3 = "Sitas tekstas turi 4 A raides"
console.log(countTextA(txt2));
console.log(countTextA(txt3));