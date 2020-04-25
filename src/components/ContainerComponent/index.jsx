import React from 'react';
import { BaseComponent } from '../';
import config from './config';

import './styles.scss';

class ContainerComponent extends BaseComponent {
  render() {
    return <div class="container">{this.props.children}</div>;
  }
}

export default ContainerComponent;
