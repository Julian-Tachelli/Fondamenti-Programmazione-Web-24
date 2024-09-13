const titolo = document.getElementById("titolo");
const data= document.getElementById("data");

const macDate = new Date();
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì" , "Sabato", "Domenica"]
const numGiorno = macDate.getDay();

if(macDate.getDay() >= 7) {
titolo.innerHTML= "Buon ultima " + giorniSettimana[numGiorno-1];
} else {
    titolo.innerHTML= "Buon ultimo " + giorniSettimana[numGiorno-1];
}

data.innerHTML = macDate.getDate() +"/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear();

function clicks(){
    const risposta = confirm("Sei sicuro di voler accedere a questa funzione? Il tuo PC potrebbe autodistruggersi in pochi secondi.");

    if(risposta){
        window.open("micio.html", "_self");
    } else {
        return
    }
}