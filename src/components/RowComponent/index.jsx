import React from 'react';
import { BaseComponent } from '../';

import './styles.scss';

class RowComponent extends BaseComponent {
  allowedChilds = ['col'];

  availableSettings = {
    align: {
      title: 'Vertical alignment',
      type: 'select',
      value: 'none',
      options: {
        start: 'Top', // .align-items-start
        center: 'Middle', // .align-items-center
        end: 'Bottom', // .align-items-end
      },
    },
    justify: {
      title: 'Horizontal alignment',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        start: 'Left', // .justify-content-start
        center: 'Middle', // .justify-content-center
        end: 'Right', // .justify-content-end
      },
    },
  };

  render() {
    return <div class="row">{this.props.children}</div>;
  }
}

export default RowComponent;
