import React from 'react';
import { connect } from 'react-redux';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  ParagraphComponent,
} from './components';
import { buildTree } from './utils';

import './assets/scss/main.scss';

const App = (props) => {
  return (
    <main>
      {buildTree(props.components).map((component, key) =>
        renderComponent(component, key)
      )}
    </main>
  );
};

const mapComponentToKey = {
  container: ContainerComponent,
  row: RowComponent,
  col: ColComponent,
  paragraph: ParagraphComponent,
};

const renderComponent = (component, key) => {
  // Check if components exists for the given `type`.
  if (typeof mapComponentToKey[component.type] !== 'undefined') {
    // Create a dynamic element.
    return React.createElement(
      // Element type.
      mapComponentToKey[component.type],
      // Pass props.
      { key, ...component },
      // If there are children, loop through them resursively.
      component.children &&
        component.children.map((children, key) =>
          renderComponent(children, key)
        )
    );
  }
};

const mapStateToProps = (state) => {
  return { components: [...state] };
};

export default connect(mapStateToProps)(App);
