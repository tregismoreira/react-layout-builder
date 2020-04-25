import React from 'react';
import BaseComponent from '../BaseComponent';
import config from './config';

import './styles.scss';

class RowComponent extends BaseComponent {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}

export default RowComponent;
