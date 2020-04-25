import React from 'react';
import { ContainerComponent, RowComponent, ColComponent } from './components';

import './assets/scss/main.scss';

import components from './assets/data.json';

const mapComponentToKey = {
  container: ContainerComponent,
  row: RowComponent,
  col: ColComponent,
};

const RenderComponent = (component, key) => {
  // Check if components exists for the given `type`.
  if (typeof mapComponentToKey[component.type] !== 'undefined') {
    // Create a dynamic element.
    return React.createElement(
      // Element type.
      mapComponentToKey[component.type],
      // Pass props.
      { key, settings: component.settings },
      // If there are children, loop through them resursively.
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
