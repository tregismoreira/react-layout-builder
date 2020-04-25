import React from 'react';
import BaseComponent from '../BaseComponent';
import config from './config';

import './styles.scss';

class ColComponent extends BaseComponent {
  render() {
    return <div className="col">{this.props.children}</div>;
  }
}

export default ColComponent;
