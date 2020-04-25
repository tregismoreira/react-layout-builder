import React from 'react';
import { ContainerComponent, RowComponent, ColComponent } from './components';

import './assets/scss/main.scss';

const components = [
  {
    type: 'container',
    settings: {},
    children: [
      {
        type: 'row',
        settings: {},
        children: [
          {
            type: 'col',
            settings: {},
            children: [],
          },
          {
            type: 'col',
            settings: {},
            children: [],
          },
        ],
      },
      {
        type: 'row',
        settings: {},
        children: [
          {
            type: 'col',
            settings: {},
            children: [],
          },
          {
            type: 'col',
            settings: {
              offset: 'offset-4',
            },
            children: [],
          },
        ],
      },
      {
        type: 'row',
        settings: {},
        children: [
          {
            type: 'col',
            settings: {
              size: 'col-4',
            },
            children: [],
          },
        ],
      },
      {
        type: 'row',
        settings: {
          justify: 'justify-content-center',
        },
        children: [
          {
            type: 'col',
            settings: {
              size: 'col-4',
            },
            children: [],
          },
        ],
      },
      {
        type: 'row',
        settings: {
          justify: 'justify-content-end',
        },
        children: [
          {
            type: 'col',
            settings: {
              size: 'col-4',
            },
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
      { key, settings: component.settings },
      component.children &&
        component.children.map((children, key) =>
          RenderComponent(children, key)
        )
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
