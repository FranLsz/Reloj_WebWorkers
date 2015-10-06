//WEB WORKER-> temporizador 

var segundos = 60;


function bajar() {
    segundos--;

    self.postMessage(segundos);

    //ejecuta la funcion cada segundo
    setTimeout("bajar()", 1000);

}

self.onmessage = function (evt) {

    if (evt.data == "reiniciar")
        segundos = 60;
}

bajar();