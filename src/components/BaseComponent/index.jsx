import React, { Component } from 'react';
import { connect as reduxConnect } from 'react-redux';
import { addComponent } from '../../store/actions';
import Actions from './Actions';

import styles from './styles.module.scss';

export class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.config = null;
    this.style = null;
    this.modifiers = null;
  }

  handleAddChildComponent = (type) => {
    this.props.dispatch.addComponent({
      type,
      parent: this.props.id,
    });
  };

  handleOpenModifiers = () => {};

  render() {
    return (
      <div className={`${this.modifiers} ${this.style} ${styles.wrapper}`}>
        {this.props.children}
        <Actions
          config={this.config}
          executeAction={this.handleAddChildComponent}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: { addComponent: (payload) => dispatch(addComponent(payload)) },
  };
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export const connect = (Component) => {
  return reduxConnect(mapStateToProps, mapDispatchToProps)(Component);
};

export default connect(BaseComponent);
