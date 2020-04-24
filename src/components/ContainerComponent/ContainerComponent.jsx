import React from 'react';
import { BaseComponent } from '../';

class ContainerComponent extends BaseComponent {
  allowedChilds = ['row'];

  availableSettings = {
    fluid: {
      title: 'Vertical alignment',
      type: 'checkbox',
      value: false,
      options: {
        false: 'False', // .container
        true: 'True', // .container-fluid
      },
    },
  };

  render() {
    return <div>This is a component type ContainerComponent.</div>;
  }
}

export default ContainerComponent;
