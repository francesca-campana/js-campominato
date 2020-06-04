
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50


var livello = parseInt(prompt('Scegli un livello di difficoltà tra 0 e 2'));

var numeroTotaleGiocate = rangeDifficolta(livello);//100;// ToDo: eliminare please
var numeroBombe = 16;
// console.log(rangeDifficolta(livello));
console.log(numeroTotaleGiocate);
var numeroMassimoGiocate = numeroTotaleGiocate - numeroBombe;
console.log(numeroMassimoGiocate);

//Il computer deve generare 16 numeri casuali tra 1 e 100.
var bomba = [];
var i = 0;
while (bomba.length < 16) {
  var numeriRandom = numberGenerator();

  if (ricercaElemento(bomba,numeriRandom) == false) {
      bomba.push(numeriRandom);
     }
  i++

}
console.log(bomba);


//Creo un ciclo che mi permette di proseguire nel gioco fintanto che il numero
//immesso non sia stato trovato nella lista di bombe e
//non che abbia esaurito le giocate massime, altrimenti il gioco si ferma.

var punteggio = 0;
var bombaTrovata = false;
while (bombaTrovata === false && punteggio < numeroMassimoGiocate) {
  var userNumber = parseInt(prompt('Inserisci un numero'));
  console.log(userNumber);
  if (ricercaElemento(bomba, userNumber) === true) {
    bombaTrovata = true;

  }else {
    punteggio++;
  }
}
console.log(punteggio);

//Stampo i risultati partita
if (bombaTrovata) {
  console.log('Hai perso il tuo punteggio è di ' + punteggio);

}else {
  console.log('Hai vinto il tuo punteggio è ' + punteggio);
}

//-----------FUNZIONI---------//
//Questa funzione stabilisce la tipologia di difficoltà del gioco attraverso il livello;
//A livello b è associata un range di giocate massime che può fare il player
function rangeDifficolta(valore){
  var valore;
  switch (valore) {
    case 1:
    valore = 80;

      break;
    case 2:
    valore = 50;
      break;
    default:
    valore = 100;

  }
  return valore;

}
//creo una funzione che mi generi un numero random da 1 a X
function numberGenerator() {
  var numero = Math.floor(Math.random() * numeroTotaleGiocate) + 1;
  return numero;
}

// Questa funzione scorre in un array e cerca il numero, se lo trova restituisce come valore 'true'.
function ricercaElemento(lista, valore){
  var trovato = false;

  for (var i = 0; i < lista.length; i++) {
    var elemento  =  lista[i];
    // console.log(elemento);

    if (elemento === valore) {
      trovato = true;
    }
  }
  return trovato;
}
