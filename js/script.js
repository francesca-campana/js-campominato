//Il computer deve generare 16 numeri casuali tra 1 e 100.

//creo una funzione che mi generi un numero random da 1 a 100
function numberGenerator() {
  var numero = Math.floor(Math.random() * 100) + 1;
  return numero;
}
// utilizzo la funzione per generare 16 numeri nel range 1-100
for (var i = 1; i <= 16; i++) {
var numeroRandom = numberGenerator();
console.log(numeroRandom);
}



// In seguito deve chiedere all’utente di inserire un numero alla volta,
// sempre compreso tra 1 e 100.

// var user = prompt('inserisci un numero');
// var i = 0;
// while (user ==) {
//   i++
// }

// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito
