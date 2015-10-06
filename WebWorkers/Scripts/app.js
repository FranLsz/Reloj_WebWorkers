//EJERCICIO: añadir un reloj hh:mm:ss con los botones de cambiar hora
// (suma +1 o -1 para reflejar hora peninsular o insular), cambiar color (al iniciar aleatoriamente pondra un color y los botones de parar e iniciar la hora.


//instanciamos el worker_hora del reloj
worker_hora = new Worker("Scripts/worker_hora.js");

worker_color = new Worker("Scripts/worker_color.js");

function lanzarWorker() {
    window.worker_hora = new Worker("Scripts/worker_hora.js");

    window.worker_hora.onmessage = function (evt) {
        document.getElementById("time").innerHTML = evt.data;
    }
}

worker_hora.onmessage = function (evt) {
    document.getElementById("time").innerHTML = evt.data;
}

worker_color.onmessage = function (evt) {

    document.getElementById("time").style.color = evt.data;
}


function cambiarHora() {
    window.worker_hora.postMessage("cambiarHora");

}
function cambiarColor() {
    window.worker_color.postMessage("cambiarColor");

}

function parar() {
    window.worker_hora.terminate();
    window.worker_hora = undefined;
}

function reanudar() {
    lanzarWorker();
}

function reiniciar() {
    if (window.worker_hora == undefined)
        lanzarWorker();
    else
        window.worker_hora.postMessage("reiniciar");


}





document.getElementById("cambiarHora").onclick = cambiarHora;
document.getElementById("cambiarColor").onclick = cambiarColor;
document.getElementById("parar").onclick = parar;
document.getElementById("reanudar").onclick = reanudar;