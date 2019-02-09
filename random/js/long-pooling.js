'use strict';

const urlLongPooling = 'https://neto-api.herokuapp.com/comet/long-pooling';

function showLongPooling(data) {
  const randomNumberLongPooling = data.split(' ').join('');

  const cardsLongPooling = document.querySelectorAll('.long-pooling div');
  Array.from(cardsLongPooling).forEach(card => card.classList.remove('flip-it'));
  Array.from(cardsLongPooling).find(el => el.textContent === randomNumberLongPooling).classList.add('flip-it');
}

function connect() {
  const xhrLongPooling = new XMLHttpRequest();

  xhrLongPooling.onreadystatechange = function() {
    if (this.readyState !== 4) {
      return;
    }
    if (this.status === 200 || this.status === 202) {
      if (this.responseText) {
        showLongPooling(this.responseText);
      }
      connect();
      return;
    }
    setTimeout(connect, 2000);
  }
  xhrLongPooling.open('GET', urlLongPooling);
  xhrLongPooling.send();
}

connect();
