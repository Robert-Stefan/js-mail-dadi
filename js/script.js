/**
 * Mail
 * Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

//VARIABILI
var accounts = ['sora@kingdomhearts.it', 'lamabecchi.giorgini@gmail.com', 'baldo.ubaldo95@hotmail.it', 'spalmaburro.trecky@ciccini.it', 'bob.tuttofare@fallo.it']
console.log(accounts); 
var user = prompt('Inserisci la tua e-mail: ').toLowerCase();
var emailFound = false;

//ISTRUZIONI
for (var i = 0; i < accounts.length; i++) {
    //console.log(accounts[i]);

    if( accounts[i] === user ) {
        emailFound = true;
        break;
    }
}

if( emailFound ) {
    document.getElementById('mail').innerHTML = 'Utente verificato. Benvenuto nella piattaforma!';
    console.log('Utente verificato. Benvenuto nella piattaforma!');
} else {
    document.getElementById('mail').innerHTML = 'Errore utente non trovato, preghiamo di contattare l\'assistenza o di riprovare!';
    console.log('Errore utente non trovato, preghiamo di contattare l\'assistenza o di riprovare!');
}

/**
 * Gioco dei dadi
 * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

//VARIABILI
var utente = Math.floor(Math.random() * 7) + 1;
document.getElementById('personale').innerHTML = 'Questo è il tuo numero : ' + utente;
console.log('Questo è il tuo numero : ' + utente);

var computer = Math.floor(Math.random() * 7) + 1;
document.getElementById('pc').innerHTML = 'Questo è il numero del PC : ' + computer;
console.log('Questo è il numero del PC : ' + computer);

//ISTRUZIONI
if ( utente > computer ) {
    document.getElementById('dadi').innerHTML = 'Hai vinto contro il computer! Complimenti!' + utente;
    console.log('Hai vinto contro il computer! Complimenti!');
} else if ( utente == computer ) { 
    document.getElementById('dadi').innerHTML = 'Siete pari!';
    console.log('Siete pari!');
} else {
    document.getElementById('dadi').innerHTML = 'Il PC ha vinto!';
    console.log('Il PC ha vinto!')
}