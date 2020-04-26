import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.config = null;
    this.style = null;
    this.modifiers = null;
  }

  handleAddChildComponent = () => {};
  handleOpenModifiers = () => {};

  render() {
    return (
      <div className={`${this.modifiers} ${this.style} ${styles.wrapper}`}>
        <ul className={styles.controls}>
          <li>
            <a href="#" className={styles['controls-link']}>
              <FontAwesomeIcon icon={faPlus} />
            </a>
          </li>
          <li>
            <a href="#" className={styles['controls-link']}>
              <FontAwesomeIcon icon={faCog} />
            </a>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default BaseComponent;
