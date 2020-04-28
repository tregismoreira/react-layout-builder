import React, { Component } from 'react';
import ActionsAdd from './ActionsAdd';
import ActionsRemove from './ActionsRemove';

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
        <div className={styles['actions-top']}>
          <ActionsRemove config={this.config} component={this.props} />
        </div>
        {this.props.children}
        {this.config.allowedChilds.length > 0 && (
          <div className={styles['actions-bottom']}>
            <ActionsAdd config={this.config} component={this.props} />
          </div>
        )}
      </div>
    );
  }
}

export default BaseComponent;
