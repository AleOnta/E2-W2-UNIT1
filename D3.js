/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 3;
let b = 4;
console.log("Ex.1");

if (a > b) {
  console.log(a, "it's higher than", b);
} else if (a === b || b === a) {
  console.log("these numbers are equal");
} else {
  console.log(b, "it's higher than", a);
}

console.log("exercise 1 alternative:");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------------------------------------");
console.log("Ex.2");

if (a != 5) {
  console.log("not-equal!");
} else {
  console.log("these numbers are equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number_3 = 53;
console.log("------------------------------------");
console.log("Ex.3");

if (number_3 % 5 === 0) {
  console.log("this number is perfectly divisible by 5");
} else {
  console.log("this number isn't perfectly divisible by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number_4 = 3;
let number_5 = 2;
console.log("------------------------------------");
console.log("Ex.4");

if (number_4 === 8) {
  console.log(number_4, "it's equal to 8");
} else if (number_5 === 8) {
  console.log(number_5, "it's equal to 8");
} else if (number_4 + number_5 === 8) {
  console.log("the sum of", number_4, "&", number_5, "it's equal to 8");
} else if (number_5 + number_4 === 8) {
  console.log("the sum of", number_5, "&", number_4, "it's equal to 8");
} else if (number_4 - number_5 === 8) {
  console.log("the subtraction of", number_4, "&", number_5, "it's equal to 8");
} else if (number_5 - number_4 === 8) {
  console.log("the subtraction of", number_5, "&", number_4, "it's equal to 8");
} else {
  console.log("try again, there's no number equal to 8 in this case!");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
console.log("------------------------------------");
console.log("Ex.5");

if (totalShoppingCart < 50) {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("The cart doesn't exceed 50€, we inform you that the shipping price is 10€");
  console.log("The total amount is:", totalShoppingCart + "€");
} else {
  console.log("The total amount of your cart exceed 50€, the shipping service will be free");
  console.log("The total amount is:", totalShoppingCart + "€");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------------------------------------");
console.log("Ex.6");
totalShoppingCart = totalShoppingCart - (totalShoppingCart * 20) / 100;

if (totalShoppingCart < 50) {
  console.log("The cart doesn't exceed 50€, we inform you that the shipping price is 10€");
  console.log("Please note that our Black Friday promotion it's active and every product has a discount of the 20%");
  console.log("The total amount is:", totalShoppingCart + "€");
} else {
  console.log("The total amount of your cart exceed 50€, the shipping service won't be charged");
  console.log("The total amount is:", totalShoppingCart + "€");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number_6 = 10;
let number_7 = 100;
let number_8 = 1000;
console.log("------------------------------------");
console.log("Ex.7");

if (number_6 < number_7 && number_7 < number_8) {
  console.log(number_8, number_7, number_6);
} else if (number_6 > number_7 && number_8 > number_6) {
  console.log(number_8, number_6, number_7);
} else if (number_6 < number_7 && number_6 > number_8) {
  console.log(number_7, number_6, number_8);
} else if (number_7 > number_8 && number_8 > number_6) {
  console.log(number_7, number_8, number_6);
} else if (number_6 > number_7 && number_7 > number_8) {
  console.log(number_6, number_7, number_8);
} else if (number_6 > number_8 && number_8 > number_7) {
  console.log(number_6, number_8, number_7);
} else {
  console.log("I'm a noobie, have mercy :/");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = undefined;
console.log("------------------------------------");
console.log("Ex.8");

if (typeof value === "number") {
  console.log("It's a number");
} else if (typeof value === "string") {
  console.log("It's not a number -.-");
  console.log("It's a string");
} else if (typeof value === "boolean") {
  console.log("It's not a number -.-");
  console.log("It's a bool");
} else {
  console.log("Nope, it's not a number -.-");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number_9 = 1;
console.log("------------------------------------");
console.log("Ex.9");

if (number_9 % 2 === 0) {
  console.log("It's even");
} else if (number_9 === 0) {
  console.log("The number is 0");
} else {
  console.log("It's odd");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
console.log("------------------------------------");
console.log("Ex.10");

if (val < 10 && val > 5) {
  console.log("Less than 10 but higher than 5");
} else if (val < 5) {
  console.log("Less than 5");
} else if (val === 10) {
  console.log("Equal to 10");
} else {
  console.log("Higher than 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log("------------------------------------");
console.log("Ex.11");
console.log("What city it's me from?:", me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log("------------------------------------");
console.log("Ex.12");
console.log("Now, the lastname of me it's:", me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log("------------------------------------");
console.log("Ex.13");
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------------------------------------");
console.log("Ex.14");
// PRIMO METODO:
let number = [];
console.log(number);
number.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(number);

// SECONDO METODO:
let number_dos = [];
for (let i = 0; i < 10; i++) {
  number_dos.push(i + 1);
}

console.log(number_dos);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------------------------------------");
console.log("Ex.15");
number[9] = 100;
console.log(number);
