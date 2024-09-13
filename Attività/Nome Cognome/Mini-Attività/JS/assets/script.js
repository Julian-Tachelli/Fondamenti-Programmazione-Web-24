const elemento = document.getElementById("titolo") ;
console. log (elemento. innerHTML);
elemento. innerHTML = "Buon giovedì!";
console. log(elemento. innerHTML) ;

const contenitore = document.getElementsByClassName("box")
console.log(contenitore)

contenitore[0].appendChild(document.createElement("p"))