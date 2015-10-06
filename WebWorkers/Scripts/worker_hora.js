//WEB WORKER-> reloj

var insular = false;

function reloj(timeoutDisable) {
    //si no se envia nada se ejecuta el timeout, si se envia un false se omite el mismo
    timeoutDisable = typeof timeoutDisable !== 'undefined' ? timeoutDisable : false;

    var h = new Date().getHours(); // Horas
    var m = new Date().getMinutes(); // Minutos
    var s = new Date().getSeconds(); // Segundos

    //si es hora insular se resta 1
    h = (insular ? h - 1 : h);

    //añade un 0 si el segundo es entre 0 y 9, transforma hh:mm:4 en hh:mm:04
    var formatH = (h < 10 ? "0" + h : h);
    var formatM = (m < 10 ? "0" + m : m);
    var formatS = (s < 10 ? "0" + s : s);

    //envia la hora al JS desde el cual fue invocado
    self.postMessage(formatH + ":" + formatM + ":" + formatS);

    //si no se ha desactivado el timeout para esta llamada a la funcion
    if (!timeoutDisable)
        setTimeout("reloj()", 1000);//ejecuta la funcion cada segundo
}

self.onmessage = function (evt) {

    if (evt.data === "cambiarHora")
        insular = !insular;
    reloj(true);
}



reloj();