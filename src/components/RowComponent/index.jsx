import React from 'react';
import { BaseComponent } from '../';
import config from './config';

import './styles.scss';

class RowComponent extends BaseComponent {
  render() {
    return <div class="row">{this.props.children}</div>;
  }
}

export default RowComponent;
