'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/draw');

window.editor.addEventListener('update', event => {
  event.canvas.toBlob(blob => connection.send(blob));
});
