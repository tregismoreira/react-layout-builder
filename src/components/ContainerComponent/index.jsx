import React from 'react';
import BaseComponent from '../BaseComponent';
import config from './config';

import styles from './styles.module.scss';

class ContainerComponent extends BaseComponent {
  render() {
    return (
      <div className={`container ${styles.container}`}>
        {this.props.children}
      </div>
    );
  }
}

export default ContainerComponent;
