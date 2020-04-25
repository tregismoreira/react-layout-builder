import React from 'react';
import BaseComponent from '../BaseComponent';
import config from './config';

import styles from './styles.module.scss';

class RowComponent extends BaseComponent {
  render() {
    return <div className={`row ${styles.row}`}>{this.props.children}</div>;
  }
}

export default RowComponent;
