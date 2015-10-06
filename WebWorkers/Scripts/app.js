//EJERCICIO: añadir un reloj hh:mm:ss con los botones de cambiar hora
// (suma +1 o -1 para reflejar hora peninsular o insular), cambiar color (al iniciar aleatoriamente pondra un color y los botones de parar e iniciar la hora.


//instanciamos el worker del temporzador
var worker = new Worker("Scripts/worker_hora.js");

function lanzarWorker() {
    var worker = new Worker("Scripts/worker.js");

    worker.onmessage = function (evt) {

        document.getElementById("seg").innerHTML = evt.data;

        if (evt.data == "0") {

            location.reload();

        }
    }
}


worker.onmessage = function (evt) {

    document.getElementById("seg").innerHTML = evt.data;

    if (evt.data == "0") {

        location.reload();

    }
}

function parar() {
    worker.terminate();
    worker = undefined;
}

function reiniciar() {
    if (worker == undefined) 
        lanzarWorker();
    else
        worker.postMessage("reiniciar");


    }


    document.getElementById("stop").onclick = parar;
    document.getElementById("reiniciar").onclick = reiniciar;