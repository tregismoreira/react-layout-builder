import React from 'react';
import { BaseComponent } from '../';
import config from './config';

import './styles.scss';

class ColComponent extends BaseComponent {
  render() {
    return <div class="col">{this.props.children}</div>;
  }
}

export default ColComponent;
