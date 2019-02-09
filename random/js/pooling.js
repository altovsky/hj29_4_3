'use strict';

const urlPolling = 'https://neto-api.herokuapp.com/comet/pooling',
      xhrPolling = new XMLHttpRequest();

xhrPolling.addEventListener('load', showPolling);
xhrPolling.addEventListener('error', error => {});

function showPolling() {
  let randomNumberPolling = xhrPolling.responseText;

  const cardsPolling = document.querySelectorAll('.pooling div');
  Array.from(cardsPolling).forEach(card => card.classList.remove('flip-it'));
  Array.from(cardsPolling).find(element => element.textContent === randomNumberPolling).classList.add('flip-it');
}

setInterval(() => {
  xhrPolling.open('GET', urlPolling);
  xhrPolling.send();
}, 5000);
