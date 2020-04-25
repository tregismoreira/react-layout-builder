import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

class BaseComponent extends Component {
  constructor(props) {
    super(props);

    // Set the machine name.
    this.name = '';

    // Set custom styles.
    this.style = '';

    // Set the class modifiers.
    this.modifiers = '';
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
