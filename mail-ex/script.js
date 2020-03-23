// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

var mailYes = ["ciao@bello.it","ciaone@bello.it","ciauzzo@bello.it"];
var mailAsk = prompt("Inserisci qui la tua mail");

var mailI;
var msg;

for(var i= 0; i < mailYes.length; i++){
  mailI = mailYes[i];
  // console.log(mailI);
  if(mailI == mailAsk){
    console.log("L'email " + mailI +  "è corretta");
    msg = "Email giusta"
  }
  else{
    console.log("L'email è sbagliata");
    msg = "Email sbagliata"
  }

}
document.getElementById('my_id').innerHTML = msg;
