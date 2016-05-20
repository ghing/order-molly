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
                     items={ITEMS} />,
      options.container
    );
  }
}

export class AdminApp {
  constructor(options) {
    ReactDOM.render(
      <OrderMollyAdminApp socket={options.socket} />,
      options.container
    );
  }
}
