window.addEventListener("load",init, false);

// La función init se ejecuta cuando termina de cargarse la página
function init() {
    // Conexión con el servidor de websocket
    wsConnect();
}

function wsConnect() {
    // Connect to WebSocket 

    websocket= new WebSocket("ws://localhost:8089");

    // Asignación de callbacks
    websocket.onopen = function (evt) {
        onOpen(evt)
    };
    websocket.onclose = function (evt) {
        onClose(evt)
    };
    websocket.onmessage = function (evt) {
        onMessage(evt)
    };
    websocket.onerror = function (evt) {
        onError(evt)
    };
}

// Envía un mensaje al servidor (y se imprime en la consola)
function doSend(message) {
    console.log("Enviando: " +message+ " al servidor");
    websocket.send(message);
}


// Se ejecuta cuando se establece la conexión Websocket con el servidor
function onOpen(evt) {
    // Habilitamos el botón Enviar
    document.getElementById("enviar").disabled= false;
    // Enviamos el saludo inicial al servidor
    doSend("Hola");
}

// Se ejecuta cuando la conexión con el servidor se cierra
function onClose(evt) {

    // Deshabilitamos el boton
    document.getElementById("enviar").disabled= true;

    // Intenta reconectarse cada 2 segundos
    setTimeout(function () {
        wsConnect()
    }, 2000);
}

// Se invoca cuando se recibe un mensaje del servidor
function onMessage(evt) {
    // Agregamos al textarea el mensaje recibido
    var area=document.getElementById("mensajes")
    area.innerHTML+=evt.data+ "\n";
}

// Se invoca cuando se presenta un error en el WebSocket
function onError(evt) {
    console.error("ERROR: " +evt.data);
}

// Se invoca cuando se oprime el botón Enviar
function enviarTexto(event){
    event.preventDefault();
    var campo=event.target.texto;
    // Enviamos el valor del campo al servidor
    doSend(campo.value);
    // Vaciamos el campo
    campo.value="";
}
