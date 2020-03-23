var numUtente = Math.floor(Math.random() * 6 + 1);
console.log(numUtente);
alert("Hai lanciato il dado, il tuo numero è: " + numUtente);

var numPc = Math.floor(Math.random() * 6 + 1);
console.log(numPc);
alert("Il PC ha lanciato il dado, il numero è: " + numPc);

var msg;

if (numUtente > numPc){
  msg = "Complimenti, hai battuto il PC!";
} else if(numUtente < numPc){
  msg = "Mi spiace, sei stato sfortunato! Hai perso.";
} else{
  msg = "I numeri sono uguali. Parità!";
}

document.getElementById('my_id').innerHTML = msg;
