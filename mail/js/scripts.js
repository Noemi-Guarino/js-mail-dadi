// Mail
// -Chiedi all'utente la sua email,
// -creare una lista tramite js array
// -controlla che sia nella lista di chi può accedere,
// -stampa un messaggio appropriato sull'esito del controllo.

let correctemail = prompt("Inserisci la tua e-mail");
console.log(correctemail);

const emailList = [
    "pincopallo@gmail.com",
    "cicciogamer@gmail.com",
    "costanzosenzacostanza@gmail.com",
    "ginopeppino@gmail.com",
];

let authorized = false;

for (let i = 0; i < emailList.length; i++){

    if (correctemail == emailList[i]) { 
        alert ("la tua e-mail è valida")
        console.log("corretta");
        authorized = true;
        
    }
    // else {
    //     alert ("la tua e-mail non è valida")
    //     console.log("non è corretta");
    // }
}

if (authorized == false) { 
    alert ("la tua e-mail non è valida")
    console.log("non è corretta");
}



