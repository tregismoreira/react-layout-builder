import React from 'react';
import { ContainerComponent, RowComponent, ColComponent } from './components';

import './assets/scss/main.scss';

const components = [
  {
    type: 'container',
    config: {},
    children: [
      {
        type: 'row',
        config: {},
        children: [
          {
            type: 'col',
            config: {},
            children: [],
          },
          {
            type: 'col',
            config: {},
            children: [],
          },
        ],
      },
      {
        type: 'row',
        config: {},
        children: [
          {
            type: 'col',
            config: {},
            children: [],
          },
          {
            type: 'col',
            config: {},
            children: [],
          },
          {
            type: 'col',
            config: {},
            children: [],
          },
        ],
      },
    ],
  },
];

const mapComponentToKey = {
  container: ContainerComponent,
  row: RowComponent,
  col: ColComponent,
};

const RenderComponent = (component) => {
  if (typeof mapComponentToKey[component.type] !== 'undefined') {
    return React.createElement(
      mapComponentToKey[component.type],
      {},
      component.children.map((children) => RenderComponent(children))
    );
  }
};

function App() {
  return (
    <main>{components.map((component) => RenderComponent(component))}</main>
  );
}

export default App;
