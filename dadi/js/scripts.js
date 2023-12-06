let result = document.getElementById("lancia");
game.addEventListener ("click", 
    function () {
        let resultuser = Math.round(Math.random() * 6 + 1);
        console.log(Math.random());
        document.getElementById("resultuser").innerHTML ="Hai pescato il numero:" + resultuser;

        let resultpc = Math.round(Math.random() * 6 + 1);
        console.log(Math.random());
        document.getElementById("resultpc").innerHTML ="Il tuo avversario ha pescato il numero:" + resultpc ;

        if (resultuser > resultpc ) {
            document.getElementById("winner").innerHTML = "HAI VINTO! HAI PESCATO IL NUMERO:" + resultuser;
        }

        else if (resultuser === resultpc ) {
        document.getElementById("winner").innerHTML = "HAI PESCATO IL NUMERO:" + resultuser + "RITENTA,C'É STATO UN PAREGGIO";
        }

        else (resultuser < resultpc ) ;
        document.getElementById("winner").innerHTML = "HAI PESCATO IL NUMERO:" + resultuser + "RITENTA,SARAI PIÙ FORTUNATO/A";                
    }
)
