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
    return <div class="container">{this.props.children}</div>;
  }
}

export default ContainerComponent;
