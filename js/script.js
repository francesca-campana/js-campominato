//Il computer deve generare 16 numeri casuali tra 1 e 100.

//creo una funzione che mi generi un numero random da 1 a 100
function numberGenerator() {
  var numero = Math.floor(Math.random() * 100) + 1;
  return numero;
}

var bomba = [];
var i = 0;
while (bomba.length < 16) {
  var numeriRandom = numberGenerator();

  if (!bomba.includes(numeriRandom)) {
      bomba.push(numeriRandom);
     }

  i++

}
console.log(bomba);





var userNumber = parseInt(prompt('Inserisci un numero'));
console.log(userNumber);

var risultato = ricercaNumero(bomba, userNumber);




function ricercaNumero(lista, valore){
  var trovato = false;
  for (var i = 0; i < lista.length; i++) {
    var elemento  =  lista[i];
    // console.log(elemento);

    if (elemento === valore) {
      trovato = true;
    }
    if (trovato == true) {
      console.log('hai perso');

    }else {
      userNumber = parseInt(prompt('Inserisci un numero'));
      console.log(userNumber);
    }
  }

}





// In seguito deve chiedere all’utente di inserire un numero alla volta,
// sempre compreso tra 1 e 100.



// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito
