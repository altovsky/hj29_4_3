'use strict';

const urlWebSocket = 'wss://neto-api.herokuapp.com/comet/websocket',
      websocket = new WebSocket(urlWebSocket);

websocket.addEventListener('open', () => {});
websocket.addEventListener('message', showWebSocket);

function showWebSocket(event) {
  let randomNumberWebSocket = event.data;

  const cardsWebSocket = document.querySelectorAll('.websocket div');
  Array.from(cardsWebSocket).forEach(card => card.classList.remove('flip-it'));
  Array.from(cardsWebSocket).find(element => element.textContent === randomNumberWebSocket).classList.add('flip-it');
}
