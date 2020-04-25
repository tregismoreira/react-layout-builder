import React from 'react';
import { ContainerComponent, RowComponent, ColComponent } from './components';

import './assets/scss/main.scss';

import components from './assets/data.json';

const mapComponentToKey = {
  container: ContainerComponent,
  row: RowComponent,
  col: ColComponent,
};

const buildTree = (array) => {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = array.length; i < len; i++) {
    arrElem = array[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]['children'] = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parent) {
        mappedArr[mappedElem['parent']]['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
};

const renderComponent = (component, key) => {
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
          renderComponent(children, key)
        )
    );
  }
};

function App() {
  return (
    <main>
      {buildTree(components).map((component, key) =>
        renderComponent(component, key)
      )}
    </main>
  );
}

export default App;
