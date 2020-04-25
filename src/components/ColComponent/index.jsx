import React from 'react';
import BaseComponent from '../BaseComponent';
import config from './config';

import styles from './styles.module.scss';

class ColComponent extends BaseComponent {
  render() {
    return <div className={`col ${styles.col}`}>{this.props.children}</div>;
  }
}

export default ColComponent;
