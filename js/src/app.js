import {knuthShuffle} from 'knuth-shuffle';
import React from 'react';
import ReactDOM from 'react-dom';

import OrderMollyApp from './components/OrderMollyApp';
import OrderMollyAdminApp from './components/OrderMollyAdminApp';

const ITEMS = [
  "hug",
  "high five",
  "ghost story",
  "recipe",
  "factoid",
  "restaurant recommendation",
  "spelling",
  "joke",
  "lie",
  "hair",
  "apology",
  "drop of blood",
  "sweat",
  "dare",
  "gardening advice",
  "shoulder to cry on",
  "listening ear",
  "shared outrage",
  "vegetable identification",
  "earnest eye contact",
  "a boost",
  "one chorus by a 90s female vocal group",
  "bad dance move"
];

export class App {
  constructor(options) {
    ReactDOM.render(
      <OrderMollyApp socket={options.socket}
                     items={knuthShuffle(ITEMS)} />,
      options.container
    );
  }
}

export class AdminApp {
  constructor(options) {
    try {
      // Fix up for prefixing
      let AudioContext = window.AudioContext||window.webkitAudioContext;
      let context = new AudioContext();
      let request = new XMLHttpRequest();
      request.open('GET', '/sounds/ding.mp3', true);
      request.responseType = 'arraybuffer';

      // Decode asynchronously
      request.onload = function() {
        context.decodeAudioData(request.response, function(buffer) {
          ReactDOM.render(
            <OrderMollyAdminApp socket={options.socket} notificationSound={buffer} audioContext={context} />,
            options.container
          );
        });
      }
      request.send();
    }
    catch(e) {
      console.log("Web Audio not supported on this device");   
      ReactDOM.render(
        <OrderMollyAdminApp socket={options.socket} />,
        options.container
      );
    }

  }
}
