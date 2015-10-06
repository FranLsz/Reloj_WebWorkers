
function generarColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

self.postMessage(generarColor());

self.onmessage = function (evt) {

    if (evt.data === "cambiarColor")
        self.postMessage(generarColor());
}