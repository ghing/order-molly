import React from 'react';
import ReactDOM from 'react-dom';

import OrderMollyApp from './components/OrderMollyApp';
import OrderMollyAdminApp from './components/OrderMollyAdminApp';

const ITEMS = [
  "A hug",
  "A haiku",
  "A high five"
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
