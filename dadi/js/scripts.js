let result = document.getElementById("lancia");
game.addEventListener ("click", 
    function () {
        let resultuser = Math.floor(Math.random() * 6 + 1);
        console.log(Math.random());
        document.getElementById("resultuser").innerHTML ="Hai pescato il numero:" + resultuser;

        resultpc = Math.floor(Math.random() * 6 + 1);
        console.log(Math.random());
        document.getElementById("resultpc").innerHTML ="Il tuo avversario ha pescato il numero:" + resultpc ;

        

            if (resultuser > resultpc ) {
                console.log("vincitore");
                result = "HAI VINTO";
                document.getElementById("winner").innerHTML = "HAI VINTO!" 

            } else if (resultuser == resultpc ) {
                console.log("pareggio");
                result = "HAI PAREGGIATO";
                document.getElementById("winner").innerHTML = "RITENTA,C'É STATO UN PAREGGIO";

            } else {
                console.log("perdente");
                result = "HAI PERSO";
                document.getElementById("winner").innerHTML = "RITENTA,SARAI PIÙ FORTUNATO/A"; 
            }

        }       
    )


document.getElementById("winner").innerHTML = result ;
