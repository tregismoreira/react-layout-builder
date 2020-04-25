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

const RenderComponent = (component, key) => {
  if (typeof mapComponentToKey[component.type] !== 'undefined') {
    return React.createElement(
      mapComponentToKey[component.type],
      { key },
      component.children.map((children, key) => RenderComponent(children, key))
    );
  }
};

function App() {
  return (
    <main>
      {components.map((component, key) => RenderComponent(component, key))}
    </main>
  );
}

export default App;
