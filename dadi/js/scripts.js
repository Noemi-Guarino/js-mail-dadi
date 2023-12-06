let result = document.getElementById("lancia");
game.addEventListener ("click", 
    function () {
        let resultuser = Math.floor(Math.random() * 6 + 1);
        console.log(Math.random());
        document.getElementById("resultuser").innerHTML ="Hai pescato il numero:" + resultuser;

        let resultpc = Math.floor(Math.random() * 6 + 1);
        console.log(Math.random());
        document.getElementById("resultpc").innerHTML ="Il tuo avversario ha pescato il numero:" + resultpc ;

        if (resultuser > resultpc ) {
            document.getElementById("winner").innerHTML = "HAI VINTO!" 
        }

        else if (resultuser === resultpc ) {
        document.getElementById("winner").innerHTML = "RITENTA,C'É STATO UN PAREGGIO";
        }

        else (resultuser < resultpc ) ;
        document.getElementById("winner").innerHTML = "RITENTA,SARAI PIÙ FORTUNATO/A";                
    }
)
