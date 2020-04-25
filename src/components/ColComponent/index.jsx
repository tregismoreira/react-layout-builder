import React from 'react';
import { BaseComponent } from '../';

import './styles.scss';

class ColComponent extends BaseComponent {
  allowedChilds = ['row', 'heading', 'text'];

  availableSettings = {
    size: {
      title: 'Size',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        1: '1', // .col-1
        2: '2', // .col-2
        3: '3', // .col-3
        4: '4', // .col-4
        5: '5', // .col-5
        6: '6', // .col-6
        7: '7', // .col-7
        8: '8', // .col-8
        9: '9', // .col-9
        10: '10', // .col-10
        11: '11', // .col-11
        12: '12', // .col-12
      },
    },
    align: {
      title: 'Self alignment',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        start: 'Left', // .align-self-start
        center: 'Middle', // .align-self-center
        end: 'Right', // .align-self-end
      },
    },
    offset: {
      title: 'Offset',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        1: '1', // .offset-1
        2: '2', // .offset-2
        3: '3', // .offset-3
        4: '4', // .offset-4
        5: '5', // .offset-5
        6: '6', // .offset-6
        7: '7', // .offset-7
        8: '8', // .offset-8
        9: '9', // .offset-9
        10: '10', // .offset-10
        11: '11', // .offset-11
        12: '12', // .offset-12
      },
    },
    margin: {
      title: 'Auto margin',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        left: 'Left', // .ml-auto
        right: 'Right', // .mr-auto
      },
    },
  };

  render() {
    return <div class="col">{this.props.children}</div>;
  }
}

export default ColComponent;
