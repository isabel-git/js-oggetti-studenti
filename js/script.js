// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 

// PRIMO EX
var studente = {
  "nome": 'Lisa',
  "cognome": 'Simpson',
  "eta": 8
}

// stampo proprietà e valore
for (var key in studente) {

  console.log((key + ": " + studente[key]));
}

// SECONDO EX
var studenti = [
  {
    "nome": 'Lisa',
    "cognome": 'Simpson',
    "eta": 8
  },
  {
    "nome": 'Bart',
    "cognome": 'Simpson',
    "eta": 10
  },
  {
    "nome": 'Maggie',
    "cognome": 'Simpson',
    "eta": 1
  }
];

// stampo nome e cognome
for (var i = 0; i < studenti.length; i++) {
  for (var key in studenti[i]) {
    console.log(studenti[i].nome + " " + studenti[i].cognome);
  }

};
