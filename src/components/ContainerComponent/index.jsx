import React from 'react';
import BaseComponent from '../BaseComponent';
import config from './config';

import './styles.scss';

class ContainerComponent extends BaseComponent {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default ContainerComponent;
