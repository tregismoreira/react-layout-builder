import React, { Component } from 'react';
import Actions from './Actions';

import styles from './styles.module.scss';

export class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.config = null;
    this.style = null;
    this.modifiers = null;
  }

  render() {
    return (
      <div className={`${this.modifiers} ${this.style} ${styles.wrapper}`}>
        {this.props.children}
        {this.config.allowedChilds.length > 0 && (
          <Actions config={this.config} component={this.props} />
        )}
      </div>
    );
  }
}

export default BaseComponent;
